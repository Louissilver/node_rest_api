const Caes = require('../models/caes');

module.exports = app => {
  app.get('/caes', (req, res) => res.send('<h1>Cães GET</h1>'));

  app.post('/caes', (req, res) => {
    const cao = req.body;
    Caes.adicionar(cao, res);
  });
}