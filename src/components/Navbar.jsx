import React from "react";
import { DollarSign, Plus } from "lucide-react";

function Navbar({ onAddClick }) {
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
      </div>
    </nav>
  );
}

export default Navbar;
