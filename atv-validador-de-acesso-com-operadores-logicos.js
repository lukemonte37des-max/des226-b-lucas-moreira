//Validador de acesso com operadores lógicos (&&, ||, !)
//objetivo: Combinar múltiplas condições lógicas.
// Enunciado: Um  sistema de catraca libera a entrada se a pessoa for maior de idade (18 anos ou mais) ou se estiver acompanhada de um responsável. Caso contrário, a entrada é negada. Porém se o usuario estiver suspenso (bloqueado = true), a entrada é negada, independente da idade ou se estiver acompanhado.

//1- Criação de variáveis para idade, acompanhado e bloqueado
const idade = 17; // idade da pessoa
const acompanhado = true; // se a pessoa está acompanhada de um responsável
const bloqueado = false; // se a pessoa está suspensa (bloqueada)

//Cenários para teste:
// Cenário 1: Idade 16, acompanhado = false, bloqueado = false (acesso negado)
// Cenário 2: Idade 16, acompanhado = true, bloqueado = false (acesso permitido)
// Cenário 3: Idade 25, acompanhado = false, bloqueado = true (acesso bloqueado)

//---Verificação de acesso com operadores lógicos
if (bloqueado) 
    console.log("Acesso negado: usuário suspenso.");
else if (idade >= 18 || acompanhado)
    console.log("Acesso permitido.");
else
    console.log("Acesso negado: menor de idade e não acompanhado.");    

