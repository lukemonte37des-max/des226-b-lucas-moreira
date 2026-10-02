let entrada = ('prompt-sync')();

// ... (código anterior do loop de checagem dos usuários) ...

// Define se o acesso é permitido baseando-se nas variáveis booleanas
if (usOk && snOk) {
  acessoPermitido = true;
}

// === PARTE 2: VALIDAÇÃO DE ACESSO CONFORME O ENUNCIADO ===

// Usando o operador lógico NOT (!) para verificar se o acesso NÃO foi permitido
if (!acessoPermitido) {
  console.log("\nAcesso negado!");

  // Detalhando o motivo do bloqueio para o usuário
  if (!usOk) {
    console.log("Motivo: Usuário incorreto.");
  } else if (!snOk) {
    console.log("Motivo: Senha incorreta.");
  }

  rl.close(); // Encerra o programa imediatamente aqui
  return; // Para a execução da função
}

// Se o programa não entrou no 'if' acima, significa que o acesso foi liberado!
console.log(`\nAcesso Permitido! Bem-vindo, ${usuarioLogado.login}.`);
console.log(`Seu saldo atual é de: R$ ${usuarioLogado.saldo.toFixed(2)}`);

// O fluxo do programa continua aqui para o passo 3 (Saque)...
rl.close();
