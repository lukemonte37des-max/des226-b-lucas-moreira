//Calculadora de média e status escolar(else if encadeado)
//objetivo: Calcular a média de um aluno e determinar seu status escolar com base na média.
// Enunciado: Um sistema escolar precisa calcular a média de um aluno com base em suas notas e determinar seu status escolar. A média é calculada somando todas as notas e dividindo pelo número de notas. O status escolar é determinado da seguinte forma:
// - Se a média for maior ou igual a 7, o aluno está aprovado.
// - Se a média for maior ou igual a 5 e menor que 7, o aluno está em recuperação.
// - Se a média for menor que 5, o aluno está reprovado.    

//1- Criação de variáveis para armazenar as notas do aluno
const nota1 = 8;    
const nota2 = 6;
const nota3 = 7;    
const nota4 = 5;

//2- Cálculo da média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

//3- Determinação do status escolar com base na média
if (media >= 7) {
    console.log(`Média: ${media.toFixed(2)} - Status: Aprovado`);
    console.log("Parabéns! O aluno está aprovado.");
} else if (media >= 5) { // CORRIGIDO: mudado de '=' para '>='
    console.log(`Média: ${media.toFixed(2)} - Status: Recuperação`);
    console.log("O aluno precisa estudar mais para melhorar sua média.");
} else { // CORRIGIDO: se não for >=7 e nem >=5, com certeza é menor que 5
    console.log(`Média: ${media.toFixed(2)} - Status: Reprovado`);
    console.log("O aluno está reprovado. É necessário refazer o curso.");
}