const conexao = require('../infra/conexao');

class Caes {
  adicionar(cao, res) {

    const nomeEhValido = cao.nome.length >= 2;
    console.log(cao.nome)
    console.log(nomeEhValido)

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
          res.status(201).json(cao);
        }
      })
    }


  }

  listar(res) {
    const sql = 'SELECT * FROM caes';

    conexao.query(sql, (err, results) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(results);
      }
    })
  }

  buscarPorId(id, res) {
    const sql = `SELECT * FROM caes WHERE id = ${id}`;

    conexao.query(sql, (err, results) => {
      const cao = results[0];
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(cao);
      }
    })
  }

  alterar(id, valores, res) {
    const sql = `
      UPDATE caes SET ?
      WHERE id = ?
    `

    conexao.query(sql, [valores, id], (err, results) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }

  deletar(id, res) {
    const sql = `DELETE FROM caes WHERE id = ?`

    conexao.query(sql, id, (err, results) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

module.exports = new Caes;