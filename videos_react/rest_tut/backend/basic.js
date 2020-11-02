const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.json({
    nome: Cinthia,
    idade: 19
  })
});

app.listen(3333);