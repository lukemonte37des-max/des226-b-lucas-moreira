const prompt = require("prompt-sync")({ sigint: true });

// Solicita a entrada de dados do usuário e converte para número inteiro
const numero = Number(
  prompt("Digite um número inteiro para a contagem regressiva: "),
);

// Laço for com decremento partindo do número digitado até 0
for (let n = numero; n >= 0; n--) {
  console.log(n);
}

//Exibe a mensagem de finalização
console.log("Decolagem autorizada!");

//Aguarda o pressionamento da tecla ENTER para encerrar
prompt("Pressione ENTER para encerrar o programa!");
