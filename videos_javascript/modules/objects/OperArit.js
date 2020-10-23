class OperArit{
    constructor(var1, var2){
        this.var1 = var1;
        this.var2 = var2;
    }
    soma(){
        return (this.var1 + this.var2); // operador de soma "+"
    }
    subtracao(){
        return (this.var1 - this.var2); // operador de subtração "-"
    }
    multiplicacao(){
        return (this.var1 * this.var2); //operador multiplicacao "*"
    }
    divisao(){
        return (this.var1 / this.var2); //operador de divisão "/"
    }
    mod(){
        return (this.var1 % this.var2); //operdador módulo "%", resto da divisão
    }
    potencia(){
        return (this.var1 ** this.var2); // operador de potenciação "**"
    }

}

module.exports = OperArit;

// Aula 6 - index.js
/*
const OperArit = require("./modules/objects/OperArit");

var calculator = new OperArit(5, 2);

console.log("\nSoma: " + calculator.soma());
console.log("\nSubstração: " + calculator.subtracao());
console.log("\nMultiplicação: " + calculator.multiplicacao());
console.log("\nDivisão: " + calculator.divisao());
console.log("\nMódulo (resto da divisão inteira de a por b): " + calculator.mod());
console.log("\nPotênciação: " + calculator.potencia());
*/