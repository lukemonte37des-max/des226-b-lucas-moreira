let entrada = require('prompt-sync')(); 

let usuario = 'lukas';
let senha = '24863578';
let usOk = false;
let snOk = false;
let acessoPermitido = false;

console.log('Insira seus dados para acessar o sistema: ')

let loginUsuario = entrada('Nome de usuário: ');
let loginSenha = entrada('Senha: ');

if(usuario == loginUsuario.toLowerCase ()) {
   console.log('Nome de usuário verificado com sucesso!');
   usOk = true;
}

if(senha == loginSenha) {
   console.log('Senha verificada com sucesso!');
   snOk = true;
}

if (usOk === true) {
    if (snOk === true) {
        acessoPermitido = true;
}

if (acessoPermitido === true) {
    console.log('Acesso permitido! Bem-vindo ao sistema!');
} else {
    console.log('Acesso negado! Usuário ou senha incorretos!');
}

}
entrada('Pressione ENTER para finalizar o programa!');