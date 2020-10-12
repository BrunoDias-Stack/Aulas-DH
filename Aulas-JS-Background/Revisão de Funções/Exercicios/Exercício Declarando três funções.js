// Escreva as três funções a seguir:

// anterior: recebe um número como parâmetro e retorna esse número menos um.

// triplo: recibe um número como parâmetro e devolve o triplo desse número.

// anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, você terá que retornar o número. recebido multiplicado por 3 (três) e o resultado subtrai 1 (um).

function anterior(numero){
    return numero -1
}
let num1 = (anterior(9))
console.log(num1)

function triplo(numero){
    return numero*3
}
let num2 = (triplo(1))
console.log(num2)

function anteriorDoTriplo(numero){
    return numero*3-1
}
let num3 = (anteriorDoTriplo(4))
console.log(num3)