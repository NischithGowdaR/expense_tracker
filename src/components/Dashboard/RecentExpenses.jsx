import React from "react";

function RecentExpenses({ expenses }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        padding: "1.5rem",
        marginTop: "2rem",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "1rem" }}>
        Recent Expenses
      </h3>

      {expenses.length === 0 ? (
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          No expenses yet. Click "Add Expense" to get started.
        </p>
      ) : (
        expenses
          .slice()
          .reverse()
          .map((exp) => (
            <div
              key={exp.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <div>
                <p style={{ fontWeight: "bold", color: "#111827" }}>{exp.description}</p>
                <p style={{ color: "#6b7280" }}>
                  {exp.category} • {exp.date}
                </p>
              </div>
              <p style={{ fontWeight: "bold" }}>${exp.amount.toFixed(2)}</p>
            </div>
          ))
      )}
    </div>
  );
}

export default RecentExpenses;
