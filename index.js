// Aula 6

const OperArit = require("./modules/objects/OperArit");

var calculator = new OperArit(5, 2);

console.log("\nSoma: " + calculator.soma());
console.log("\nSubstração: " + calculator.subtracao());
console.log("\nMultiplicação: " + calculator.multiplicacao());
console.log("\nDivisão: " + calculator.divisao());
console.log("\nMódulo (resto da divisão inteira de a por b): " + calculator.mod());
console.log("\nPotênciação: " + calculator.potencia());