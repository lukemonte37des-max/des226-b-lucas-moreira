//1- Criação de uma variável do tipo number com valor negativo
const numero = -5;

console.log(`O número é: ${numero}`);

//---Verificação se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//---Verificação se o número é positivo, negativo ou zero
if (numero > 0) {
    console.log("O número é positivo."); 
} else if (numero < 0) {
    console.log("O número é negativo.");
} else{
    console.log("O número é zero.");
}   

