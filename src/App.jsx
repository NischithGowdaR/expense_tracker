import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ExpenseModal from "./components/ExpenseModal";
import StatsModal from "./components/StatsModal";
import ReportsModal from "./components/ReportsModal";
import NotificationsModal from "./components/NotificationsModal";
import { useExpenses } from "./hooks/useExpenses";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showReportsModal, setShowReportsModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expenseData) => {
    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);
    setShowAddModal(false);
  };

  const isAnyModalOpen = showAddModal || showStatsModal || showReportsModal || showNotificationsModal;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar 
        onAddClick={() => setShowAddModal(true)}
        onViewStats={() => setShowStatsModal(true)}
        onViewReports={() => setShowReportsModal(true)}
        onNotificationsClick={() => setShowNotificationsModal(true)}
      />
      {!isAnyModalOpen && <Dashboard expenses={expenses} />}
      {showAddModal && (
        <ExpenseModal onClose={() => setShowAddModal(false)} onAdd={handleAddExpense} />
      )}
      {showStatsModal && (
        <StatsModal onClose={() => setShowStatsModal(false)} expenses={expenses} />
      )}
      {showReportsModal && (
        <ReportsModal onClose={() => setShowReportsModal(false)} expenses={expenses} />
      )}
      {showNotificationsModal && (
        <NotificationsModal onClose={() => setShowNotificationsModal(false)} expenses={expenses} />
      )}
    </div>
  );
}

export default App;
