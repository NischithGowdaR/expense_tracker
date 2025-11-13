import { useState } from "react";

export function useExpenses() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);

  return { expenses, addExpense };
}
