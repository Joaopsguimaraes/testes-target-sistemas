/**
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
 */

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
