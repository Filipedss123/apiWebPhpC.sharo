//import do express
var express = require('express');
//criar umn objeto do express.
var app = express();

//ponto de acesso: endpoint
//request é uma requisição
//response é a resposta do servidor
app.get('/', function (request, response) {
  response.send('Filipe Silva');
});

//a porta que sera exposta
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});