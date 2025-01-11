/**
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fibonacciCheck(num: number): string {
  let a: number = 0;
  let b: number = 1;
  let fib: number = 0;

  while (fib < num) {
    fib = a + b;
    a = b;
    b = fib;
  }

  if (fib === num) {
    return `O número ${num} pertence à sequência de  Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

console.log(fibonacciCheck(34));
console.log(fibonacciCheck(33));
