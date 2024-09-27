/*Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). 
Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 2 valores com uma casa decimal cada um.

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco 
antes e depois da igualdade. Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de 
linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada	Exemplos de Saída
5.0
7.1

MEDIA = 6.43182

0.0
7.1

MEDIA = 4.84091

10.0
10.0

MEDIA = 10.00000 */

let a = parseFloat(5); // ponto flutuante 
let b = parseFloat(7.1); 
let c = parseFloat(0.0);
let d = parseFloat(7.1); 
let e = parseFloat(10.0);
let f = parseFloat(10.0); 

let media1 = (3.5 * a + 7.5 * b) / 11;
let media2 = (3.5 * c + 7.5 * d) / 11;
let media3 = (3.5 * e + 7.5 * f) / 11;

console.log(`MEDIA = ${media1.toFixed(5)} \nMEDIA = ${media2.toFixed(5)} \nMEDIA = ${media1.toFixed(5)}`);