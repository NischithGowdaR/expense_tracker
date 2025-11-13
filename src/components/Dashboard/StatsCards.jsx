import React from "react";
import { DollarSign, Calendar, TrendingUp } from "lucide-react";

function StatsCards({ weekTotal, monthTotal, yearTotal }) {
  const cards = [
    {
      title: "Weekly Expenses",
      value: weekTotal,
      icon: Calendar,
      gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
    },
    {
      title: "Monthly Expenses",
      value: monthTotal,
      icon: TrendingUp,
      gradient: "linear-gradient(to right, #8b5cf6, #6d28d9)",
    },
    {
      title: "Yearly Expenses",
      value: yearTotal,
      icon: DollarSign,
      gradient: "linear-gradient(to right, #6366f1, #4338ca)",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {cards.map((card, idx) => (
        <div
          key={idx}
          style={{
            background: card.gradient,
            color: "white",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <card.icon size={28} />
          <p style={{ fontSize: "32px", fontWeight: "bold", margin: "10px 0" }}>
            ${card.value.toFixed(2)}
          </p>
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
