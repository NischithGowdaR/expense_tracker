import React, { useState } from "react";
import { DollarSign, TrendingUp, Calendar, Plus, X, PieChart as PieIcon } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    amount: "",
    category: "Food",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const categories = [
    "Food",
    "Transport",
    "Entertainment",
    "Bills",
    "Shopping",
    "Health",
    "Other",
  ];

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#06B6D4", "#6366F1"];

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description) {
      const expense = {
        id: Date.now(),
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        description: newExpense.description,
        date: newExpense.date,
      };
      setExpenses([...expenses, expense]);
      setNewExpense({
        amount: "",
        category: "Food",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
      setShowAddModal(false);
    }
  };

  const calculatePeriodTotal = (days) => {
    const now = new Date();
    const periodStart = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return expenses
      .filter((exp) => new Date(exp.date) >= periodStart)
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  const weekTotal = calculatePeriodTotal(7);
  const monthTotal = calculatePeriodTotal(30);
  const yearTotal = calculatePeriodTotal(365);

  const getCategoryTotal = (category) => {
    return expenses
      .filter((exp) => exp.category === category)
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  const categoryData = categories.map((cat) => ({
    name: cat,
    value: getCategoryTotal(cat),
  })).filter((c) => c.value > 0);

  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          background: "white",
          boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
          padding: "1rem 2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                background: "linear-gradient(to right, purple, blue)",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DollarSign color="white" size={22} />
            </div>
            <h1 style={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}>
              Expense Tracker
            </h1>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            style={{
              background: "linear-gradient(to right, #22c55e, #059669)",
              border: "none",
              padding: "10px 16px",
              color: "white",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Plus size={18} /> Add Expense
          </button>
        </div>
      </nav>

      {/* Dashboard */}
      <div style={{ padding: "2rem 3rem" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "1.5rem",
          }}
        >
          Dashboard
        </h2>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to right, #3b82f6, #2563eb)",
              color: "white",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <Calendar size={28} />
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              ${weekTotal.toFixed(2)}
            </p>
            <p>Weekly Expenses</p>
          </div>

          <div
            style={{
              background: "linear-gradient(to right, #8b5cf6, #6d28d9)",
              color: "white",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <TrendingUp size={28} />
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              ${monthTotal.toFixed(2)}
            </p>
            <p>Monthly Expenses</p>
          </div>

          <div
            style={{
              background: "linear-gradient(to right, #6366f1, #4338ca)",
              color: "white",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <DollarSign size={28} />
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              ${yearTotal.toFixed(2)}
            </p>
            <p>Yearly Expenses</p>
          </div>
        </div>

        {/* Pie Chart */}
        {categoryData.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1rem",
              }}
            >
              <PieIcon color="#6366F1" />
              <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                Category-wise Expense Distribution
              </h3>
            </div>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Recent Expenses */}
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
                    <p style={{ fontWeight: "bold", color: "#111827" }}>
                      {exp.description}
                    </p>
                    <p style={{ color: "#6b7280" }}>
                      {exp.category} • {exp.date}
                    </p>
                  </div>
                  <p style={{ fontWeight: "bold" }}>${exp.amount.toFixed(2)}</p>
                </div>
              ))
          )}
        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "2rem",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Add Expense</h3>
              <button onClick={() => setShowAddModal(false)}>
                <X size={22} />
              </button>
            </div>

            <label>Amount ($)</label>
            <input
              type="number"
              value={newExpense.amount}
              onChange={(e) =>
                setNewExpense({ ...newExpense, amount: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />

            <label>Category</label>
            <select
              value={newExpense.category}
              onChange={(e) =>
                setNewExpense({ ...newExpense, category: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            <label>Description</label>
            <input
              type="text"
              value={newExpense.description}
              onChange={(e) =>
                setNewExpense({ ...newExpense, description: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />

            <label>Date</label>
            <input
              type="date"
              value={newExpense.date}
              onChange={(e) =>
                setNewExpense({ ...newExpense, date: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  flex: 1,
                  background: "#e5e7eb",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddExpense}
                style={{
                  flex: 1,
                  background: "linear-gradient(to right, purple, blue)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
