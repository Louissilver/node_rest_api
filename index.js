const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/tabelas');

conexao.connect((err) => {
  if (err) {
    console.log('Ocorreu um erro: ' + err);
  } else {
    console.log('Conexão com o banco de dados realizada com sucesso!');

    Tabelas.init(conexao);
    const app = customExpress();

    app.listen(3000, () => console.log('Servidor executando na porta 3000'));
  }
});