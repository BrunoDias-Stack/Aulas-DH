// Implementando este operador, podemos copiar todas as
// propriedades de um objeto para outro objeto existente.

let auto = {marca: 'Ferrari', kms: 0, ano:2019};
let pilotoUm = {nome: 'Vettel', idade: 32, ...auto};
let pilotoDois = {nome: 'Leclerc', idade: 21, ... auto};

// Tanto pilotoUm como pilotoDois agora tem todas as
// propriedades que no's definimo's no objeto auto sem ter que
// os definir à mão em cada um deles.