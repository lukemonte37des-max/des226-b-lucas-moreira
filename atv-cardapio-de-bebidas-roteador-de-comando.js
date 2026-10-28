//Cardápio de bebidas/ Roteador de comando (switch / case)
//objetivo: crie uma variável (codigoProduto) (ex.: "A1", "B2", 'C3", "D4") e utilize o switch/case para exibir o nome do produto e o preço correspondente. Caso o código do produto não seja encontrado, exiba uma mensagem de erro.)

// Definição da variável com o código do produto desejado
const codigoProduto = "B2"; 

// Roteador de comando para identificar a bebida e o preço
switch (codigoProduto) {
    case "A1":
        console.log("Produto: Café Expresso");
        console.log("Preço: R$ 5,00");
        break;
        
    case "B2":
        console.log("Produto: Suco de Laranja Natural");
        console.log("Preço: R$ 8,50");
        break;
        
    case "C3":
        console.log("Produto: Refrigerante Lata");
        console.log("Preço: R$ 6,00");
        break;
        
    case "D4":
        console.log("Produto: Água Mineral sem Gás");
        console.log("Preço: R$ 4,00");
        break;
        
    default:
        // Mensagem de erro caso o código não corresponda a nenhuma opção
        console.log("Erro: Código de produto não encontrado no cardápio.");
        break;
}

