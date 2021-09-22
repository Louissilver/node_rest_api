const express = require('express');

const app = express();

app.listen(3000, () => console.log('Servidor executando na porta 3000'));

app.get('/atendimentos', (req, res) => res.send('<h1>Atendimentos</h1>'));