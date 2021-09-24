const Caes = require('../models/caes');

module.exports = app => {
  app.get('/caes', (req, res) => {
    Caes.listar(res);
  });

  app.get('/caes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Caes.buscarPorId(id, res);
  });

  app.post('/caes', (req, res) => {
    const cao = req.body;
    Caes.adicionar(cao, res);
  });

  app.patch('/caes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Caes.alterar(id, valores, res);
  })

  app.delete('/caes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Caes.deletar(id, res);
  })
}