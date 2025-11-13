export function calculatePeriodTotals(expenses) {
  const calculatePeriodTotal = (days) => {
    const now = new Date();
    const periodStart = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return expenses
      .filter((exp) => new Date(exp.date) >= periodStart)
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  return {
    weekTotal: calculatePeriodTotal(7),
    monthTotal: calculatePeriodTotal(30),
    yearTotal: calculatePeriodTotal(365),
  };
}
