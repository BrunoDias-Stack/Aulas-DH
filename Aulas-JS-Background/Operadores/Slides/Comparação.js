// DE COMPARAÇÃO SIMPLES
// Compara dois valores, retornando verdadeiro ou falso.
10 == 15 // Igualdade = false
10 != 15 // Desigualdade
// Desigualdade — true

// DE COMPARAÇÃO ESTRITA
// Compara o valor e o tipo de dado também.
10 === "10" // Igualdade estrita false
10 !== 15 // Desigualdade estrita -> true
// No primeiro caso o valor é 10 enwambos casos, mas os tipos de
// dados são number e string. Como estamos pedindo que ambas
// coisas sejam iguais, o resultado é false.

// DE COMPARAÇÃO (CONTINUAÇÃO)
// Compara dois valores, retornando verdadeiro ou falso.
15 > 15 // Maior que
false
15 >= 15 // Maior ou igual que → true
10 < 15 // Menor que true
10 <= 15 // Menor ou igual que true
// Sempre devemos escrever o símbolo maior (>) o menor (<)
// antes do igual (>= 0 <-). Se fizermos o contrário (=> 0 =<)
// JavaScript lê primeiro o operador de atribuição - e então ele
// não sabe o que fazer com o maior (>) ou o menor (<).

// LÓGICOS
// Permitem combinar valores booleanos, e o resultado também
// retorna um booleano.
// Existem três operadores e (and), ou (or), negação (not).
// AND (&.&.) todos os valores devem avaliar como true.
(10 > 15) && (e != 20) // false
  FALSE   =>     TRUE  =>   FALSE

(12 % 4 == 2) && (12 != 24) // true
    TRUE      =>    TRUE  =>   TRUE

// LÓGICOS (CONTINUAÇÃO)
// OR(ID ao menos um valor deve avaliar como true.
(12 > 15) || (e != 20) // true
  FALSE   =>    TRUE  =>   TRUE
  
(12 % 4 == e) && (2 - 24) // true
    TRUE      =>   TRUE   =>  TRUE

//NOT(!) nega a condição, se era true, será false e viceversa
!false //true
(12 >35) // true

// DE CONCATENAÇÃO
// Serve para unir cadeias de texto. Devolve otura cadeia de texto.
var nome = 'Teodoro';
var sobrenome = 'Garcia';
var nomeCompleto = nome + sobrenome;
// Se misturarmos outros tipos de dados, eles serão convertidos
// em cadeias de texto.
var linha = 'M';
var assento = 7;
var localização = linha + assento; // 'M7' como string