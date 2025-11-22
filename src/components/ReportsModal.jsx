import React from "react";
import { X, PieChart, Download } from "lucide-react";

function ReportsModal({ onClose, expenses }) {
  const getCategoryData = () => {
    const categories = {};
    expenses.forEach(exp => {
      categories[exp.category] = (categories[exp.category] || 0) + exp.amount;
    });
    return Object.entries(categories).map(([category, amount]) => ({
      category,
      amount,
      percentage: expenses.length > 0 ? ((amount / expenses.reduce((sum, e) => sum + e.amount, 0)) * 100).toFixed(2) : 0,
    }));
  };

  const categoryData = getCategoryData();
  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const colors = {
    Food: "#ff6b6b",
    Transport: "#4ecdc4",
    Entertainment: "#45b7d1",
    Bills: "#f7b731",
    Shopping: "#5f27cd",
    Health: "#00d2d3",
    Other: "#ff9ff3",
  };

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
            Expense Reports
          </h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
            }}
          >
            <X size={24} />
          </button>
        </div>

        {categoryData.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "40px 0" }}>
            No expense data available yet.
          </p>
        ) : (
          <>
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                Category Breakdown
              </h3>
              <div style={{ display: "space", flexDirection: "column", gap: "12px" }}>
                {categoryData.map((item) => (
                  <div key={item.category}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "6px",
                      }}
                    >
                      <p style={{ color: "#1f2937", fontWeight: "500" }}>{item.category}</p>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontWeight: "600", color: "#1f2937" }}>
                          ${item.amount.toFixed(2)}
                        </p>
                        <p style={{ fontSize: "12px", color: "#6b7280" }}>({item.percentage}%)</p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${item.percentage}%`,
                          backgroundColor: colors[item.category] || "#6b7280",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f9fafb",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <p style={{ color: "#6b7280" }}>Total Expenses:</p>
                <p style={{ fontWeight: "600", color: "#1f2937", fontSize: "18px" }}>
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#6b7280" }}>Categories:</p>
                <p style={{ fontWeight: "600", color: "#1f2937" }}>{categoryData.length}</p>
              </div>
            </div>
          </>
        )}

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              backgroundColor: "#e5e7eb",
              color: "#1f2937",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#f97316",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Download size={18} /> Export
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportsModal;
