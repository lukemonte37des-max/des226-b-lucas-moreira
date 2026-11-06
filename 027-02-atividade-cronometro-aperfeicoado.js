console.log("Cronômetro iniciado... (Pressione ENTER para encerrar)");

let segundos = 0;

// Configura o terminal para ler as teclas digitadas
process.stdin.setEncoding("utf8");
process.stdin.resume();

const intervalo = setInterval(() => {
  // Limpa a linha atual e move o cursor para o início
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  // Imprime o tempo decorrido na mesma linha
  process.stdout.write(`Tempo decorrido: ${segundos} segundo(s)`);

  segundos++;
}, 1000);

// Escuta o evento de digitação no terminal
process.stdin.on("data", (data) => {
  // O ENTER envia uma quebra de linha (\n ou \r\n dependendo do sistema operacional)
  if (data === "\n" || data === "\r\n") {
    clearInterval(intervalo);

    // Exibe a mensagem exatamente na linha de baixo
    process.stdout.write(
      `\nCronômetro encerrado pelo usuário! Tempo final: ${segundos - 1} segundo(s)\n`,
    );

    // Encerra o processo do Node.js, fechando o leitor do teclado
    process.exit();
  }
});
