let entrada = require("prompt-sync")();

let nome = entrada("Digite o seu nome");
let profissao = entrada("Digite a sua profissão");
let ano = entrada("Digite o ano que nasceu");

console.log("");
console.log("---------------------------------------");
console.log("Nome: " + nome);
console.log("Profissão: " + profissao);
console.log("Ano de Nascimento" + ano);

console.log("");
console.log("---------------------------------------");
console.log("Nome: " + typeof nome);
console.log("Profissão: " + typeof profissao);
console.log("Ano de Nascimento" + typeof ano);

let nomeDigitado;
let cargoDigitado;
let anoDigitado;

console.log();

nomeDigitado = entrada("Seu Nome Completo");
cargoDigitado = entrada("Sua Profissão ou Cargo Atual");
anoDigitado = entrada("Ano de Nascimento");

entrada();
