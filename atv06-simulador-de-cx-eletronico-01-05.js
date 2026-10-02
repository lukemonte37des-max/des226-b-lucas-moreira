// Importa e configura o prompt-sync para ler dados do terminal
const prompt = require("prompt-sync")({ sigint: true });

// OBJETIVO: Banco de dados com 3 usuários (Requisito 1)
// Garante um usuário com saldo menor ou igual a zero (maria)
const usuarios = [
  { login: "aluno", senha: "12345", saldo: 500.0 },
  { login: "maria", senha: "qwerty", saldo: 0.0 },
  { login: "joao", senha: "9876", saldo: 1200.0 },
];

console.log("=== SIMULADOR DE CAIXA ELETRÔNICO ===");

// ==========================================
// PARTE 1 & 2: Autenticação e Validação
// ==========================================

// Entrada de dados inicial
const usuarioDigitado = prompt("Digite seu nome de usuário: ");
const senhaDigitada = prompt("Digite sua senha: ", { echo: "*" }); // Oculta a senha digitada com '*'

// Variáveis de controle booleanas obrigatórias (Requisito 1)
let usOk = false;
let snOk = false;
let acessoPermitido = false;
let usuarioLogado = null;

// Laço para verificar o usuário na lista
for (let i = 0; i < usuarios.length; i++) {
  // Ignora letras maiúsculas ou minúsculas no login (.toLowerCase())
  if (usuarioDigitado.toLowerCase() === usuarios[i].login.toLowerCase()) {
    usOk = true;

    // Verifica a senha com igualdade estrita (===)
    if (senhaDigitada === usuarios[i].senha) {
      snOk = true;
      usuarioLogado = usuarios[i]; // Armazena a referência do usuário logado
    }
    break; // Usuário encontrado, interrompe o laço
  }
}

// Define o status do acesso unindo as validações booleanas com o operador E (&&)
if (usOk && snOk) {
  acessoPermitido = true;
}

// REQUISITO PARTE 2: Utilizar inversão lógica (!) para barrar o acesso incorreto
// Correção: Substituído 'return' por 'process.exit()' para funcionar corretamente no Node.js
if (!acessoPermitido) {
  console.log("\nAcesso negado!");
  process.exit(); 
}

// ==========================================
// PARTE 3: Operação Financeira (Saque)
// ==========================================

// Exibe o saldo fictício/real do usuário logado
console.log(`\nAcesso Permitido! Bem-vindo, ${usuarioLogado.login}.`);
console.log(`Seu saldo disponível atual é de: R$ ${usuarioLogado.saldo.toFixed(2)}`);

// Solicita o valor do saque e converte texto para número inteiro (Requisito Parte 3)
const valorTexto = prompt("Qual valor você deseja sacar? R\$ ");
let valorSaque = parseInt(valorTexto, 10);

// Validação se o valor solicitado é menor ou igual ao saldo disponível e maior que zero
if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > usuarioLogado.saldo) {
  console.log("\nErro: Operação cancelada! Valor inválido ou saldo insuficiente.");
  process.exit();
}

// ==========================================
// PARTE 4: Cálculo de Cédulas e Novo Saldo
// ==========================================

// Cópia temporária para calcular a distribuição de notas sem quebrar o valor original
let restante = valorSaque;

// Uso de operadores aritméticos: extração do inteiro (Math.floor) e cálculo de resto (%)
const n50 = Math.floor(restante / 50); restante %= 50;
const n20 = Math.floor(restante / 20); restante %= 20;
const n10 = Math.floor(restante / 10); restante %= 10;
const n5 = Math.floor(restante / 5);   restante %= 5;
const n2 = Math.floor(restante / 2);   restante %= 2;

// RESOLUÇÃO DO PROBLEMA: Como não existe nota de R\$ 1, se sobrar resto, o saque é inválido
if (restante !== 0) {
  console.log("\nErro: Operação cancelada!");
  console.log("Motivo: Não há notas de R\$ 1 disponíveis para compor esse valor exato.");
  process.exit();
}

// Caso o saque seja válido, subtrai o valor do saldo original (Requisito Parte 4)
usuarioLogado.saldo = usuarioLogado.saldo - valorSaque;

// Exibição dos resultados finais
console.log("\n=======================================");
console.log("   SAQUE REALIZADO COM SUCESSO!");
console.log("=======================================");
console.log(`Valor retirado: R$ ${valorSaque},00`);
console.log(`Novo saldo em conta: R$ ${usuarioLogado.saldo.toFixed(2)}`);
console.log("\nCédulas liberadas pelo terminal:");

if (n50 > 0) console.log(`- ${n50} nota(s) de R$ 50`);
if (n20 > 0) console.log(`- ${n20} nota(s) de R$ 20`);
if (n10 > 0) console.log(`- ${n10} nota(s) de R$ 10`);
if (n5 > 0)  console.log(`- ${n5} nota(s) de R$ 5`);
if (n2 > 0)  console.log(`- ${n2} nota(s) de R$ 2`);

