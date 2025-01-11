/**
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

function reverseString(str: string): string {
  let reversed: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const textOriginal: string = "Hello, World!";
console.log(`Original: ${textOriginal}`);
console.log(`Invertida: ${reverseString(textOriginal)}`);
