import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ExpenseModal from "./components/ExpenseModal";
import { useExpenses } from "./hooks/useExpenses";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { expenses, addExpense } = useExpenses();

  const handleAddExpense = (expenseData) => {
    addExpense(expenseData);
    setShowAddModal(false);
  };

  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <Navbar onAddClick={() => setShowAddModal(true)} />
      <Dashboard expenses={expenses} />
      {showAddModal && (
        <ExpenseModal onClose={() => setShowAddModal(false)} onAdd={handleAddExpense} />
      )}
    </div>
  );
}

export default App;
