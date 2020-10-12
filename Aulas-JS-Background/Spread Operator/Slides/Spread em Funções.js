// Implementando este operador, podemos passar um array para
// uma função como argumento. O operador expandirá os
// dados para que a função os tome como argumentos separados.
// Para exemplificar vamos usar o método JS Math.min() que
// recebe N quantidade de argumentos e retorna o menor.
let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); // Devolve 3.2