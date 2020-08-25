class Pessoa{
	constructor(peso, altura){
		this.peso = peso;
		this.altura = altura;
	}
	imc(){
		let imc = this.peso / (this.altura * this.altura);
		return imc;
	}
}

module.exports = Pessoa;

// Aula 5 - index.js
/* 
const Pessoa = require("./modules/objects/Pessoa");

const ana = new Pessoa(50, 1.55);
console.log(ana.imc());

const pedro = new Pessoa();
pedro.peso = 80;
pedro.altura = 1.78;
console.log(pedro.imc());
*/