const Pessoa = require("./modules/objects/Pessoa");

const ana = new Pessoa(50, 1.55);
console.log(ana.imc());

const pedro = new Pessoa();
pedro.peso = 80;
pedro.altura = 1.78;
console.log(pedro.imc());