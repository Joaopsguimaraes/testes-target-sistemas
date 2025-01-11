/**
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
 */

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
