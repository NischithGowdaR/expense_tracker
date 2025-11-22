import React from "react";
import { DollarSign, Plus, TrendingUp, PieChart, Bell } from "lucide-react";

function Navbar({ onAddClick, onViewStats, onViewReports, onNotificationsClick }) {
  return (
    <nav
      style={{
        background: "linear-gradient(to right, #7e22ce, #2563eb)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px 32px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              background: "white",
              padding: "8px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <DollarSign style={{ color: "#7e22ce" }} size={28} />
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>Expense Tracker</h1>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            onClick={onAddClick}
            style={{
              background: "#22c55e",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Plus size={20} /> Add Expense
          </button>
          <button
            onClick={onViewStats}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <TrendingUp size={20} /> View Stats
          </button>
          <button
            onClick={onViewReports}
            style={{
              background: "#ea580c",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <PieChart size={20} /> View Reports
          </button>
          <button
            onClick={onNotificationsClick}
            style={{
              background: "#facc15",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Bell size={20} /> Notifications
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
