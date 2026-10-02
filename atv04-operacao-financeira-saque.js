// ... (código anterior da validação de acesso com o 'if (!acessoPermitido)') ...

// Se o programa passou pelo bloqueio, significa que o acesso foi liberado!
console.log(`\nAcesso Permitido! Bem-vindo, ${usuarioLogado.login}.`);
// 1. Exibe o saldo conforme o enunciado
console.log(`Seu saldo disponível atual é de: R$ ${usuarioLogado.saldo.toFixed(2)}`);

// 2. Pergunta o valor do saque
rl.question("\nQual valor você deseja sacar? R\$ ", (valorTexto) => {
  
  // Converte a entrada de texto para um número decimal (Float)
  let valorSaque = parseFloat(valorTexto);

  // 3. Validação matemática conforme o enunciado
  // Verifica se o valor é maior que zero E menor ou igual ao saldo disponível
  if (valorSaque > 0 && valorSaque <= usuarioLogado.saldo) {
    
    // Se a validação passar, deduz o valor do saldo
    usuarioLogado.saldo = usuarioLogado.saldo - valorSaque; // Ou usuarioLogado.saldo -= valorSaque;
    
    console.log("\n=== Saque realizado com sucesso! ===");
    console.log(`Você retirou: R$ ${valorSaque.toFixed(2)}`);
    console.log(`Seu novo saldo é: R$ ${usuarioLogado.saldo.toFixed(2)}`);
    
  } else {
    // Caso a validação falhe (valor negativo, zero, ou acima do saldo)
    console.log("\nErro: Operação cancelada!");
    
    if (valorSaque <= 0 || isNaN(valorSaque)) {
      console.log("Motivo: O valor do saque deve ser maior que zero.");
    } else if (valorSaque > usuarioLogado.saldo) {
      console.log("Motivo: Saldo insuficiente para realizar esta operação.");
    }
  }

  rl.close(); // Encerra o programa após o término do saque
});
