import React from "react";
import { X, TrendingUp, Calendar, DollarSign } from "lucide-react";

function StatsModal({ onClose, expenses }) {
  const calculatePeriodTotal = (days) => {
    const now = new Date();
    const periodStart = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return expenses
      .filter(exp => new Date(exp.date) >= periodStart)
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  const weekTotal = calculatePeriodTotal(7);
  const monthTotal = calculatePeriodTotal(30);
  const yearTotal = calculatePeriodTotal(365);
  const allTimeTotal = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const avgExpense = expenses.length > 0 ? allTimeTotal / expenses.length : 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
          padding: "32px",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
            Expense Statistics
          </h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              hover: { color: "#4b5563" },
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginBottom: "24px" }}>
          <div
            style={{
              backgroundColor: "#eff6ff",
              borderRadius: "12px",
              padding: "16px",
              border: "1px solid #bfdbfe",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Calendar size={20} style={{ color: "#3b82f6" }} />
              <p style={{ color: "#6b7280", fontSize: "14px" }}>Weekly Total</p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
              ${weekTotal.toFixed(2)}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f5f3ff",
              borderRadius: "12px",
              padding: "16px",
              border: "1px solid #ddd6fe",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Calendar size={20} style={{ color: "#a855f7" }} />
              <p style={{ color: "#6b7280", fontSize: "14px" }}>Monthly Total</p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
              ${monthTotal.toFixed(2)}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fef3c7",
              borderRadius: "12px",
              padding: "16px",
              border: "1px solid #fde68a",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Calendar size={20} style={{ color: "#f59e0b" }} />
              <p style={{ color: "#6b7280", fontSize: "14px" }}>Yearly Total</p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
              ${yearTotal.toFixed(2)}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#dbeafe",
              borderRadius: "12px",
              padding: "16px",
              border: "1px solid #7dd3fc",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <DollarSign size={20} style={{ color: "#0ea5e9" }} />
              <p style={{ color: "#6b7280", fontSize: "14px" }}>Average Expense</p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
              ${avgExpense.toFixed(2)}
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "12px" }}>
            All-Time Summary
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <p style={{ color: "#6b7280" }}>Total Expenses:</p>
            <p style={{ fontWeight: "600", color: "#1f2937" }}>${allTimeTotal.toFixed(2)}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "#6b7280" }}>Total Transactions:</p>
            <p style={{ fontWeight: "600", color: "#1f2937" }}>{expenses.length}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default StatsModal;
