import React from "react";
import { PieChart } from "lucide-react";
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CHART_COLORS } from "../../constants/colors";

function CategoryChart({ categoryData }) {
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
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
        <PieChart color="#6366F1" />
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
          Category-wise Expense Distribution
        </h3>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RechartsPie>
            <Pie data={categoryData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsPie>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CategoryChart;
