const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// PARTE 1: Banco de dados com 3 usuários (pelo menos um com saldo <= 0)
const usuarios = [
  { login: "aluno", senha: "12345", saldo: 500.00 },
  { login: "maria", senha: "qwerty", saldo: 0.00 },
  { login: "joao",  senha: "9876",   saldo: 1200.00 }
];

console.log("=== BEM-VINDO AO CAIXA ELETRÔNICO ===");

// Fluxo de Autenticação
rl.question("Digite seu usuário: ", (usuarioDigitado) => {
  rl.question("Digite sua senha: ", (senhaDigitada) => {
    
    let usOk = false;
    let snOk = false;
    let acessoPermitido = false;
    let usuarioLogado = null;

    // Varre os usuários cadastrados
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarioDigitado.toLowerCase() === usuarios[i].login.toLowerCase()) {
        usOk = true;
        if (senhaDigitada === usuarios[i].senha) {
          snOk = true;
          usuarioLogado = usuarios[i];
        }
        break;
      }
    }

    if (usOk && snOk) {
      acessoPermitido = true;
    }

    // PARTE 2: Validação de acesso usando inversão lógica (!)
    if (!acessoPermitido) {
      console.log("\nAcesso negado!");
      rl.close();
      return;
    }

    // PARTE 3: Operação Financeira (Saque)
    console.log(`\nAcesso Permitido! Bem-vindo, ${usuarioLogado.login}.`);
    console.log(`Seu saldo disponível atual é de: R$ ${usuarioLogado.saldo.toFixed(2)}`);

    rl.question("\nQual valor em dinheiro inteiro você deseja sacar? R\$ ", (valorTexto) => {
      
      let valorSaque = parseInt(valorTexto, 10);

      // Validação básica de saldo e valor maior que zero
      if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > usuarioLogado.saldo) {
        console.log("\nErro: Operação cancelada! Valor inválido ou saldo insuficiente.");
        rl.close();
        return;
      }

      // === PARTE 4: LÓGICA DE CÁLCULO DE CÉDULAS E RESOLUÇÃO DO REQUISITO DA NOTA DE R\$ 1 ===
      
      // Criamos uma cópia temporária do valor para testar se a divisão de notas será exata
      let restante = valorSaque;

      // Cálculo simulado para conferência
      const n50 = Math.floor(restante / 50); restante %= 50;
      const n20 = Math.floor(restante / 20); restante %= 20;
      const n10 = Math.floor(restante / 10); restante %= 10;
      const n5  = Math.floor(restante / 5);  restante %= 5;
      const n2  = Math.floor(restante / 2);  restante %= 2;

      // RESOLUÇÃO DO PROBLEMA (Se restar 1 real ou se o valor original for R\$ 1 ou R\$ 3)
      // Como não há notas de R\$ 1, se sobrar restante === 1, o saque é impossível de ser pago de forma exata.
      if (restante !== 0) {
        console.log("\nErro: Operação cancelada!");
        console.log("Motivo: Não há notas de R\$ 1 disponíveis para compor esse valor exato.");
        rl.close();
        return;
      }

      // Se passou no teste acima, o saque é válido e exato!
      // Subtrai o valor do saldo original (Requisito da Parte 4)
      usuarioLogado.saldo = usuarioLogado.saldo - valorSaque;

      // Exibe os resultados na tela
      console.log("\n=======================================");
      console.log("   SAQUE REALIZADO COM SUCESSO!");
      console.log("=======================================");
      console.log(`Valor sacado: R$ ${valorSaque},00`);
      console.log(`Novo saldo em conta: R$ ${usuarioLogado.saldo.toFixed(2)}`);
      console.log("\nRetire suas cédulas:");
      
      if (n50 > 0) console.log(`- ${n50} nota(s) de R$ 50`);
      if (n20 > 0) console.log(`- ${n20} nota(s) de R$ 20`);
      if (n10 > 0) console.log(`- ${n10} nota(s) de R$ 10`);
      if (n5 > 0)  console.log(`- ${n5} nota(s) de R$ 5`);
      if (n2 > 0)  console.log(`- ${n2} nota(s) de R$ 2`);
      
      rl.close();
    });
  });
});
