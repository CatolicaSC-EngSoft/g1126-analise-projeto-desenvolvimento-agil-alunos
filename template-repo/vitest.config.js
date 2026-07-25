export default {
  test: {
    // SQLite em memória: os testes não tocam o arquivo do banco de desenvolvimento.
    env: { DATABASE_FILE: ':memory:' }
  }
};
