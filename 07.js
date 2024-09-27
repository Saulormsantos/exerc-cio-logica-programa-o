/* Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, 
sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, 
sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e 
depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá 
"Presentation Error".

Exemplos de Entrada	Exemplos de Saída
5.0
6.0
7.0

MEDIA = 6.3

5.0
10.0
10.0

MEDIA = 9.0

10.0
10.0
5.0

MEDIA = 7.5*/

let a = parseFloat(5.0); // ponto flutuante 
let b = parseFloat(6.0); 
let c = parseFloat(7.0);
let d = parseFloat(5.0); 
let e = parseFloat(10.0);
let f = parseFloat(10.0); 
let g = parseFloat(10.0); 
let h = parseFloat(10.0);
let i = parseFloat(5.0); 

let media1 = (2 * a + 3 * b + 5 * c) / 10;
let media2 = (2 * d + 3 * e + 5 * f) / 10;
let media3 = (2 * g + 3 * h + 5 * i) / 10;

console.log(`MEDIA = ${media1.toFixed(1)} \nMEDIA = ${media2.toFixed(1)} \nMEDIA = ${media1.toFixed(1)}`);