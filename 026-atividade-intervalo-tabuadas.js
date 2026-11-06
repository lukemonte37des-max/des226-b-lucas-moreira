//Importa e inicializa o prompt-sync
const prompt = require("prompt-sync")();

//Solicita e lê o numero inicial e final do intervalo
const numeroInicial = Number(prompt("Digite o número inicial: "));
const numeroFinal = Number(prompt("Digite o número final: "));

//Laço Externo: Percorre cada número dentro do intervalo informado
for (let i = numeroInicial; i <= numeroFinal; i++) {
  // Exibe o cabeçalho/separador visual para organizar a tabuada
  console.log(`\n--- Tabuada do ${i} ---`);

  // Laço interno: calcula e exibe a tabuada do 1 ao 10 para o número atual (i)
  for (let j = 1; j <= 10; j++) {
    const resultado = i * j;
    console.log(`${i} X ${j} = ${resultado}`);
  }
}

// Linha em branco para separar a última tabuada da mensagem de encerramento
console.log("");

// Finaliza aguardando a tecla ENTER para encerrar a execução
prompt("Pressione ENTER para encerrar o programa");
