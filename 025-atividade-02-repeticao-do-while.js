// Importa a biblioteca para leitura de dados no terminal
const entrada = require("prompt-sync")();

console.log("--- SOMA CONTÍNUA (Digite 0 para parar) ---");

// Inicializa as variáveis de controle (acumulador e contador)
let soma = 0;
let quantidade = 0;
let numero;

// Executa o bloco de repetição pelo menos uma vez antes de validar a condição
do {
  // Lê a entrada do usuário e converte para número real (float)
  numero = parseFloat(entrada("Digite um número: "));

  // Se o número for diferente de zero, acumula o valor e atualiza a contagem
  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }
} while (numero !== 0); // O laço continua até que o usuário digite 0

// Exibe os resultados finais na tela
console.log(`Total somado: ${soma}`);
console.log(`Quantidade de valores somados: ${quantidade}`);

// Aguarda o usuário pressionar ENTER antes de fechar o terminal
entrada("Pressione ENTER para encerrar o programa!");
