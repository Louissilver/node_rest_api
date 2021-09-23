const conexao = require('../infra/conexao');

class Caes {
  adicionar(cao, res) {

    const nomeEhValido = cao.nome.lenght >= 2;

    const validacoes = [
      {
        campo: 'nome',
        valido: nomeEhValido,
        mensagem: 'O nome do pet deve ter pelo menos 2 caracteres',
      }
    ];

    const erros = validacoes.filter(campo => !campo.valido);
    const existemErros = erros.length

    if (existemErros) {
      res.status(400).json(erros);
    } else {

      const sql = 'INSERT INTO caes SET ?';

      conexao.query(sql, cao, (err, result) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(201).json(result);
        }
      })
    }


  }
}

module.exports = new Caes;