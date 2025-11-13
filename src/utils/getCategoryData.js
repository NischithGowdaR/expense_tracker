import { CATEGORIES } from "../constants/categories.js";

export function getCategoryData(expenses) {
  const getCategoryTotal = (category) =>
    expenses
      .filter((exp) => exp.category === category)
      .reduce((sum, exp) => sum + exp.amount, 0);

  return CATEGORIES.map((cat) => ({
    name: cat,
    value: getCategoryTotal(cat),
  })).filter((c) => c.value > 0);
}
