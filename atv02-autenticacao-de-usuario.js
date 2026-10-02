let entrada = require("prompt-sync")();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Banco de dados simulado com 4 usuários (incluindo um com saldo <= 0)
const usuarios = [
 
  { login: "david", senha: "54321", saldo: 700.0 },
  { login: "zacariah", senha: "15948", saldo: 1300.0 },
  { login: "maria", senha: "qwerty", saldo: 0.0 }, // Usuário com saldo <= 0
  { login: "joao", senha: "9876", saldo: 1200.0 },
];

console.log("=== SISTEMA BANCÁRIO ===");

// Solicitando o nome de usuário
rl.question("Digite seu usuário: ", (usuarioDigitado) => {
  // Solicitando a senha
  rl.question("Digite sua senha: ", (senhaDigitada) => {
    // Variáveis de controle booleanas obrigatórias
    let usOk = false;
    let snOk = false;
    let acessoPermitido = false;
    let usuarioLogado = null;

    // Percorre a lista para encontrar o usuário
    for (let i = 0; i < usuarios.length; i++) {
      // Ignora letras maiúsculas/minúsculas no login (.toLowerCase())
      if (usuarioDigitado.toLowerCase() === usuarios[i].login.toLowerCase()) {
        usOk = true;

        // Verifica a senha com igualdade estrita (===)
        if (senhaDigitada === usuarios[i].senha) {
          snOk = true;
          usuarioLogado = usuarios[i]; // Guarda os dados do usuário que logou
        }
        break; // Usuário encontrado, interrompe o laço
      }
    }

    // Define o status do acesso permitido unindo as duas validações
    if (usOk && snOk) {
      acessoPermitido = true;
    }

    // Fluxo condicional de autenticação
    if (acessoPermitido) {
      console.log(`\nAcesso Permitido! Bem-vindo, ${usuarioLogado.login}.`);
      console.log(`Seu saldo atual é de: R$ ${usuarioLogado.saldo.toFixed(2)}`);

      // Próximo passo lógico da atividade: Realização do Saque
      // Se precisar implementar o saque baseado nesse saldo atual, avise-me!
    } else {
      console.log("\nAcesso Negado!");
      if (!usOk) {
        console.log("- Usuário não encontrado.");
      } else if (!snOk) {
        console.log("- Senha incorreta.");
      }
    }

    rl.close();
  });
});
