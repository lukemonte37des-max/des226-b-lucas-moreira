console.log("Cronômetro iniciado...");

let segundos = 0;

const intervalo = setInterval(() => {
  // Limpa a linha atual e move o cursor para o início (0)
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  // Imprime o tempo decorrido na mesma linha
  process.stdout.write(`Tempo decorrido: ${segundos} segundo(s)`);

  // Condicional simples para verificar o limite de 15 segundos
  if (segundos === 15) {
    clearInterval(intervalo);
    // Quebra a linha para exibir a mensagem de encerramento na linha de baixo
    process.stdout.write("\nTempo limite de 15 segundos atingido!\n");
  }

  segundos++;
}, 1000);
