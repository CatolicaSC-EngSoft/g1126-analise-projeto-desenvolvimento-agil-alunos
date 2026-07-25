#!/usr/bin/env node
/**
 * Painel de acompanhamento dos repositórios dos grupos.
 * Uso:  node painel.js [--iteracao 1|2|3]
 * Requer Node 18+. Sem dependências.
 *
 * Token (recomendado): export GITHUB_TOKEN=ghp_xxx
 *   Sem token o GitHub limita a 60 requisições/hora — com 10 grupos isso estoura rápido.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const cfg = JSON.parse(readFileSync(new URL('./grupos.json', import.meta.url), 'utf8'));
const arg = process.argv.indexOf('--iteracao');
const iteracao = arg > -1 ? Number(process.argv[arg + 1]) : cfg.iteracaoAtual;
const janela = cfg.iteracoes[String(iteracao)];
const TOKEN = process.env.GITHUB_TOKEN || '';

const H = { 'User-Agent': 'painel-disciplina', Accept: 'application/vnd.github+json' };
if (TOKEN) H.Authorization = `Bearer ${TOKEN}`;

async function api(caminho) {
  const r = await fetch(`https://api.github.com${caminho}`, { headers: H });
  if (r.status === 404) return null;
  if (r.status === 403) throw new Error('limite de requisições do GitHub — defina GITHUB_TOKEN');
  if (!r.ok) throw new Error(`GitHub ${r.status} em ${caminho}`);
  return r.json();
}

function slug(url) {
  const m = String(url).match(/github\.com\/([^/]+)\/([^/.]+)/);
  return m ? `${m[1]}/${m[2]}` : null;
}

async function coletar(grupo) {
  const repo = slug(grupo.repo);
  const out = { ...grupo, repoSlug: repo, alertas: [] };
  if (!repo) { out.alertas.push('URL do repositório inválida'); return out; }

  const base = await api(`/repos/${repo}`);
  if (!base) { out.alertas.push('repositório não encontrado ou privado'); return out; }
  out.privado = base.private;
  if (base.private) out.alertas.push('repositório está privado — precisa ser público');

  const [commits, prs, runs, branches] = await Promise.all([
    api(`/repos/${repo}/commits?since=${janela.de}&until=${janela.ate}&per_page=100`),
    api(`/repos/${repo}/pulls?state=all&per_page=100`),
    api(`/repos/${repo}/actions/runs?per_page=1`),
    api(`/repos/${repo}/branches?per_page=100`)
  ]);

  // commits por autor na janela da iteração
  const porAutor = {};
  (commits || []).forEach(c => {
    const quem = c.author?.login || c.commit?.author?.name || '?';
    porAutor[quem] = (porAutor[quem] || 0) + 1;
  });
  out.commits = commits ? commits.length : 0;
  out.porAutor = porAutor;
  out.ultimoCommit = commits?.[0]?.commit?.author?.date || null;

  // quem não aparece → gatilho da nota
  const vistos = Object.keys(porAutor).map(s => s.toLowerCase());
  out.semContribuicao = (grupo.integrantes || [])
    .filter(i => i.github && !vistos.includes(i.github.toLowerCase()))
    .map(i => i.nome);
  if (out.semContribuicao.length)
    out.alertas.push(`sem commits na iteração: ${out.semContribuicao.join(', ')}`);

  // PRs na janela
  const prsJanela = (prs || []).filter(p => p.created_at >= janela.de && p.created_at <= janela.ate);
  out.prs = prsJanela.length;
  out.prsMerged = prsJanela.filter(p => p.merged_at).length;
  if (iteracao >= 2 && out.prs === 0) out.alertas.push('nenhum PR nesta iteração (obrigatório a partir da Unidade 2)');

  // CI
  const run = runs?.workflow_runs?.[0];
  out.ci = run ? (run.conclusion || run.status) : 'sem execução';
  out.ciEm = run?.created_at || null;
  if (out.ci !== 'success') out.alertas.push(`CI: ${out.ci}`);

  // branch de entrega
  const nomes = (branches || []).map(b => b.name);
  out.branchEntrega = nomes.includes(`entrega-${iteracao}`);
  out.branches = nomes.length;

  return out;
}

const esc = s => String(s ?? '').replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c]));
const dt = s => s ? new Date(s).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit' }) : '—';

function html(dados) {
  const linhas = dados.map(g => {
    const autores = Object.entries(g.porAutor || {})
      .sort((a,b) => b[1]-a[1])
      .map(([k,v]) => `<span class="chip">${esc(k)} <b>${v}</b></span>`).join(' ') || '<span class="muted">nenhum</span>';
    const ciCls = g.ci === 'success' ? 'ok' : (g.ci ? 'ruim' : 'muted');
    return `<tr>
      <td><b>${esc(g.nome)}</b><div class="muted">${(g.integrantes||[]).map(i=>esc(i.nome)).join(' · ')}</div></td>
      <td>${g.repoSlug ? `<a href="${esc(g.repo)}" target="_blank">${esc(g.repoSlug)}</a>` : '<span class="ruim">—</span>'}</td>
      <td class="num">${g.commits ?? '—'}<div class="muted">últ. ${dt(g.ultimoCommit)}</div></td>
      <td>${autores}</td>
      <td class="num">${g.prs ?? '—'}<div class="muted">${g.prsMerged ?? 0} merged</div></td>
      <td class="${ciCls}">${esc(g.ci || '—')}</td>
      <td class="${g.branchEntrega ? 'ok' : 'ruim'}">${g.branchEntrega ? 'entrega-'+iteracao : 'ausente'}</td>
      <td>${(g.alertas||[]).length ? g.alertas.map(a=>`<div class="alerta">${esc(a)}</div>`).join('') : '<span class="ok">sem alertas</span>'}</td>
    </tr>`;
  }).join('\n');

  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Acompanhamento — Iteração ${iteracao}</title><style>
:root{color-scheme:light}
body{font-family:system-ui,-apple-system,sans-serif;margin:0;padding:28px;background:#fff;color:#36454F}
h1{font-size:20px;margin:0 0 4px}
.sub{color:#6E7D72;font-size:13px;margin-bottom:20px}
table{border-collapse:collapse;width:100%;font-size:13px}
th{background:#2C5F2D;color:#fff;text-align:left;padding:9px 10px;font-weight:600;font-size:12px}
td{border-bottom:1px solid #D6E0D2;padding:9px 10px;vertical-align:top}
tr:hover td{background:#F1F5EF}
.num{text-align:center;font-variant-numeric:tabular-nums}
.muted{color:#8A9A8F;font-size:11px}
.ok{color:#2C5F2D;font-weight:600}
.ruim{color:#B85042;font-weight:600}
.alerta{color:#B85042;font-size:11.5px;margin-bottom:3px}
.chip{display:inline-block;background:#F1F5EF;border:1px solid #D6E0D2;border-radius:10px;padding:1px 7px;font-size:11px;margin:1px 0}
a{color:#2C5F2D}
footer{margin-top:18px;color:#8A9A8F;font-size:11.5px}
</style></head><body>
<h1>Acompanhamento dos grupos — Iteração ${iteracao}</h1>
<div class="sub">Janela: ${janela.de.slice(0,10)} a ${janela.ate.slice(0,10)} · gerado em ${new Date().toLocaleString('pt-BR')}</div>
<table>
<tr><th>Grupo</th><th>Repositório</th><th>Commits</th><th>Por integrante</th><th>PRs</th><th>CI</th><th>Branch</th><th>Alertas</th></tr>
${linhas}
</table>
<footer>Commits por integrante alimentam o gatilho da nota: aluno sem contribuição registrada na iteração perde também a parcela do grupo.</footer>
</body></html>`;
}

const dados = [];
for (const g of cfg.grupos) {
  try { dados.push(await coletar(g)); }
  catch (e) { dados.push({ ...g, alertas: [e.message] }); }
}
writeFileSync('painel.html', html(dados));
console.log(`painel.html gerado — ${dados.length} grupo(s), iteração ${iteracao}`);
dados.forEach(g => {
  const a = (g.alertas||[]).length ? ' | ' + g.alertas.join('; ') : '';
  console.log(` - ${g.nome}: ${g.commits ?? 0} commits, CI ${g.ci ?? '—'}${a}`);
});
