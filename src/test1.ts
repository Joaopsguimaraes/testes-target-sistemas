/**
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
 */

let INDEX: number = 13;
let SUM: number = 0;
let K: number = 0;

while (K < INDEX) {
  K = K + 1;
  SUM = SUM + K;
}

console.log(`Total SOMA: ${SUM}`);
