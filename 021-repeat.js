const entrada = require('prompt-sync')();

senha = '1475369';
// repetição com teste no final
do {
    senhaDigitada = entrada('Digite uma senha');
} while (senha != senhaDigitada);

entrada('Sistema acessado com sucesso! Pressione Enter para prosseguir');