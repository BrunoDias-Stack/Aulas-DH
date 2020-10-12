//Implementando este operador, podemos copiar todos os dados de um arrayem um novo array.
let clubesUm = ['Paysandu', 'Corinthians', 'São Paulo'];
let clubeDois = ['Flamengo', 'Palmeiras', 'São Paulo'];
let todosOsClumbes = [...clubesUm, ...clubeDois];

//Nós podemos também adicionar todos os dados de um arrayem um array existente
let fatias = ['aniversário', 'para'];
let frase = ['Feliz', ...fatias, 'voce' ];