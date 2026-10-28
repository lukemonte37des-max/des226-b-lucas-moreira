const entrada = require("prompt-sync")();

// estrutura de repetição de controle
let contador = 1;

while (contador < 10)  {
     contador = contador + 1;
     console.log(contador);
}

for (let n = contador; n < 10; n++) {
    console.log(n);
}

entrada("Pressione ENTER para encerrar o programa!");