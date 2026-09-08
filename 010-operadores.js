let entrada = require('prompt-sync')();

//Vamos calcular
let strNum1 = entrada('Insira o 1º valor: ');
let strNum2 = entrada('Insira o 2º valor: ');

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let inteiroDivisao = parseInt(num1 / num2);
let restoDivisao = num1 % num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);
console.log(`Divisão: ${num1} / ${num2} = ${divisao.toFixed(2) }`);
console.log(`Divisão (inteira): ${num1} / ${num2} = ${inteiroDivisao}`);
console.log(`Resto da Divisão: ${num1} / ${num2} sobra: ${restoDivisao}`);