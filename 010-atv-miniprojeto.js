//1. Instancia a Data atual
const dataAtual = new Date();

//2. Solicita nome e matrícula
const nome = prompt('Digite seu nome: ');
const matricula = prompt('Digite sua matrícula: ');

//3. Array com 3 disciplinas
const disciplinas = ['Programação', 'Banco de Dados', 'Algoritmos'];

//4. Arrow function que recebe os dados e imprime o log formatado
const registrarAcesso = (nome, matricula, disciplinas, dataAtual) => {
console.log('\n---LOG DE ACESSO AO LABORAÓRIO ---');
console.log(`Aluno: ${nome}`);
console.log(`Matrícula: ${matricula}`);
console.log(`Disciplinas: ${disciplinas.join(',')}`);
console.log(`Data e hora do registro: ${data.toLocaleString('pt-BR')}`);
console.log('-------------------------\n');

};

// Chama a função
registrarAcesso(nome, matricula, disciplinas, dataAtual);

//5. Exibe o tipo da variável da data e da função
console.log('Tipo da variável dataAtual:', typeof dataAtual);
console.log('Tipo da variável registrarAcesso:', typeof registrarAcesso);

