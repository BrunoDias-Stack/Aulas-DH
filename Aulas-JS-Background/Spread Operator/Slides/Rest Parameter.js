// O Parâmetro rest é escrito da mesma forma que o operador
// spread '...' A diferença é que ele é usado durante a definição
// da função e não durante a sua execução.
// O parâmetro rest irá gerar um array com todos os argumentos
// adicionais passados para a função.

function myFuncao(param1, param2, ... outros) {
return outros;
}
myFuncao('a', 'b', 'c','d','e');
// retornará ['c','d', 'e']

// Implementando o rest parameter, podemos definir uma função
// que aceite qualquer número de argumentos.
function somar(... numeros) {
// Sabendo que os números são agora um array
// podemos usar o método reduce para obter a soma
return numeros.reduce ((pilha, num) => pilha += num);
}

somar(1, 4); // devolve 5
somar(13, 6, 8, 12, 23, 37); // devolve 99

// Como o rest parameter capta todos os argumentos
// restantes, deve ser sempre o último parâmetro da
// função, caso contrário, receberemos um erro.
function somar(...numeros, outroParametro) {
// ✓ Usamos o método de reduce para obter a soma
return numeros.reduce((pilha, num) => pilha +- num);
}
// SyntaxError: parameter after rest parameter