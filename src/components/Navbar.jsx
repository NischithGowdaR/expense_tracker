import React from "react";
import { DollarSign, Plus, TrendingUp, Calendar, PieChart, Bell } from "lucide-react";

function Navbar({ onAddClick, onViewStats, onViewReports, onNotificationsClick }) {
  return (
    <nav
      style={{
        background: "white",
        boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
        padding: "1rem 2rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={onAddClick}
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
          <button
            onClick={onViewStats}
            style={{
              background: "linear-gradient(to right, #3b82f6, #2563eb)",
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
            <TrendingUp size={18} /> View Stats
          </button>
          <button
            onClick={onViewReports}
            style={{
              background: "linear-gradient(to right, #f97316, #ea580c)",
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
            <PieChart size={18} /> View Reports
          </button>
          <button
            onClick={onNotificationsClick}
            style={{
              background: "linear-gradient(to right, #facc15, #eab308)",
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
            <Bell size={18} /> Notifications
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
