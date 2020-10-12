//FUNÇÕES DECLARADAS
// São aquelas que utilizam estrutura básica. Recebem um nome
// formal através do qual a invocaremos.
function fazerSorvete (quantidade) {
return -repeat (quantidade)
}

//FUNÇÕES EXPRESADAS
// São aqueles que são atribuídas como um valor a uma variável
// O nome da função será o nome da variável que nós declaramos
let fazerSushi = function(quantidade) {
return sushi.repeat(quantidade)
}

//EXECUTANDO UMA FUNÇÃO
// A maneira de executar uma função é digitando seu nome,
// seguido pela abertura e fechamento dos parênteses.
nomeFunction();
// Se você quiser ver ou salvar os dados que retornam, será
// necessário armazená-los em uma variável, ou fazer um
// console.log da execução.
let resultado = nomeFunction();
console.log(nomeFunction());

//EXECUTANDO UMA FUNÇÃO
// Se a função espera por argumentos, podemos passá-los dentro
// de parênteses.
// É importante respeitar a ordem, se houver mais de um
// parâmetro, pois o Javascript irá atribuí-los na ordem em que chegam
function saudacao(nome, sobrenome) {
return 'Olá! ' + nome + " " + sobrenome;
}
saudacao ('Rafael', Silva);
// retorna. "Olá Rafael Silva

//EXECUTANDO UMA FUNÇÃO
// Também é importante ter em mente que quando temos
// parâmetros em nossa função, o Javascript espera que
// passemos como argumentos ao executá-la.
function saudacao (nome, sobrenome) {
return 'ola ' + nome + sobrenome;
}
saudacao();// retorna 'ola undefined undefined'
// Não tendo recebido o argumento de que precisava,
// o Javascript atribui o tipo de dado undefined
// para as variáveis nome e sobrenome

//EXECUTANDO UMA FUNÇÃO
// Para este tipo de casos, o Javascript nos permite definir os
// valores predefinidos.
// Se adicionarmos um igual - depois do parâmetro, poderemos
// especificar o seu valor no caso de não chegar nenhum.
function saudacao(nome = 'visitante',sobrenome = 'anônimo') {
return 'ola ' + nome + ' ' + sobrenome;

}
saudacao(); // retorna "Olá visitante anônimo