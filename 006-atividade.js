let entrada = require("prompt-sync")();

console.log("Digite o nome de jogo a ser avaliado:");
let jogo = entrada();
console.log("Que nota você dá para esse jogo (0-10):");
let nota = entrada();
console.log("Você recomendaria esse jogo? (sim/não:)");
let recomenda = entrada();

// eu controlo o formato
let engajamento;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === "sim" ? true : false;
let ehNulo = numPaisesExibidos === null ? "null" : "outra coisa";

console.log("");
console.log("---------------------------------------");
console.log("engajamento: " + typeof(engajamento));
console.log("numPaisesExibidos: " + typeof(numPaisesExibidos));
console.log("notaInt: " + typeof(notaInt));
// o retorno de um null é object
console.log("recomendaBool: " + typeof(recomendaBool));




entrada();



