let entrada = require("prompt-sync")();

const readline = require("readline");

// Configuração da entrada de dados pelo terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Variáveis de controle de autenticação (Requisito 4)
const SENHA_CORRETA = "1234";
let usuarioAutenticado = false;

console.log("=== BEM-VINDO AO CAIXA ELETRÔNICO ===");

// 1. Fluxo de Autenticação
rl.question("Digite sua senha de 4 dígitos: ", (senhaDigitada) => {
  // Validação lógica de igualdade estrita
  if (senhaDigitada === SENHA_CORRETA) {
    usuarioAutenticado = true;
  }

  // Uso de inversão lógica (NOT !) conforme o Requisito 3
  if (!usuarioAutenticado) {
    console.log("Erro: Senha incorreta! Acesso negado.");
    rl.close();
    return; // Encerra a execução do programa
  }

  console.log("\nAutenticação realizada com sucesso!");

  // 2. Fluxo de Saque
  rl.question(
    "Digite o valor que deseja sacar (apenas números inteiros): ",
    (valorTexto) => {
      // Entrada de dados e conversão de texto para inteiro (Requisito 1)
      let valorSaque = parseInt(valorTexto, 10);

      // Validação lógica usando operadores de comparação (Requisito 3)
      if (isNaN(valorSaque) || valorSaque <= 0) {
        console.log("Erro: Valor de saque inválido.");
        rl.close();
        return;
      }

      console.log(`\nProcessando o saque de R$ ${valorSaque}...`);

      // 3. Cálculo de cédulas usando operadores aritméticos e resto (Requisito 2)
      // Vamos simular um caixa com notas de R\$ 50, R\$ 20 e R\$ 10

      // Extração do inteiro de uma divisão usando Math.floor
      const notas50 = Math.floor(valorSaque / 50);
      valorSaque = valorSaque % 50; // Cálculo do resto da divisão

      const notas20 = Math.floor(valorSaque / 20);
      valorSaque = valorSaque % 20;

      const notas10 = Math.floor(valorSaque / 10);
      valorSaque = valorSaque % 10;

      // Se ainda sobrar algum valor, significa que o caixa não possui notas menores (ex: R\$ 5 ou R\$ 2)
      if (valorSaque !== 0) {
        console.log(
          "Erro: Este caixa possui apenas notas de R\$ 50, R\$ 20 e R\$ 10. Valor indisponível para entrega.",
        );
      } else {
        console.log("Saque realizado com sucesso! Retire suas cédulas:");
        if (notas50 > 0) console.log(`- ${notas50} nota(s) de R$ 50`);
        if (notas20 > 0) console.log(`- ${notas20} nota(s) de R$ 20`);
        if (notas10 > 0) console.log(`- ${notas10} nota(s) de R$ 10`);
      }

      rl.close();
    },
  );
});
