# Testes Target Sistemas

Olá sou João Guimarães e este é o repositório para o 5 testes propostos. São os seguintes testes:

## OBS: Só um lembrete antes de visualizar os testes a seguir no README, todos os testes estão separados em arquivos para serem executados, como test1, test2, test3 e etc!

Para executar os seguintes testes, voce pode executar o comando:

`npm run start:test1` para o primeiro teste
`npm run start:test2` para o segundo teste

e assim sucessivamente!

### Teste 1 - Soma

Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

### Resolução:

```ts
let INDEX: number = 13;
let SUM: number = 0;
let K: number = 0;

while (K < INDEX) {
  K = K + 1;
  SUM = SUM + K;
}

console.log(`Total SOMA: ${SUM}`);
```

### Teste 2 - Sequência de Fibonacci

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

### Resolução:

```ts
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
```

### Teste 3 - Faturamento diário

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

### Resolução:

```ts
import fs from "node:fs";
import path from "node:path";

interface DailyInvoicing {
  day: number;
  value: number;
}

function readJsonData(): DailyInvoicing[] {
  const pathFile = path.join(__dirname, "dados.json");
  const jsonData = fs.readFileSync(pathFile, "utf8");
  return JSON.parse(jsonData) as DailyInvoicing[];
}

function analyzeInvoicing(invoicing: DailyInvoicing[]): void {
  const daysWithInvoice = invoicing.filter(({ value }) => value > 0);

  const lowerInvoicing = Math.min(...daysWithInvoice.map(({ value }) => value));
  const highestInvoicing = Math.max(
    ...daysWithInvoice.map(({ value }) => value)
  );

  const averageMonthly =
    daysWithInvoice.reduce((acc, { value }) => acc + value, 0) /
    daysWithInvoice.length;

  const daysAboveAverage = daysWithInvoice.filter(
    ({ value }) => value > averageMonthly
  ).length;

  console.log(`Menor faturamento: R$ ${lowerInvoicing.toFixed(2)}`);
  console.log(`Maior faturamento: R$ ${highestInvoicing.toFixed(2)}`);
  console.log(`Número de dias acima da média: ${daysAboveAverage}`);
}

const dataInvoicing = readJsonData();
analyzeInvoicing(dataInvoicing);
```

### Teste 4 - Faturamento mensal

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

### Resolução

```ts
interface StateInvoicing {
  [state: string]: number;
}

function calculatePercentages(invoicing: StateInvoicing): void {
  const total = Object.values(invoicing).reduce((acc, value) => acc + value, 0);

  for (const [state, value] of Object.entries(invoicing)) {
    const percentage = (value / total) * 100;
    console.log(`${state}: ${percentage.toFixed(2)}%`);
  }
}

const invoicingMonthly: StateInvoicing = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

calculatePercentages(invoicingMonthly);
```

### Teste 5 - Caracteres de um string

Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

### Resolução:

```ts
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
```