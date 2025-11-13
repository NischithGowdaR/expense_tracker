import React from "react";
import { calculatePeriodTotals } from "../../utils/calculatePeriodTotals";
import { getCategoryData } from "../../utils/getCategoryData";
import StatsCards from "./StatsCards";
import CategoryChart from "./CategoryChart";
import RecentExpenses from "./RecentExpenses";

function Dashboard({ expenses }) {
  const { weekTotal, monthTotal, yearTotal } = calculatePeriodTotals(expenses);
  const categoryData = getCategoryData(expenses);

  return (
    <div style={{ padding: "2rem 3rem" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1.5rem" }}>Dashboard</h2>
      <StatsCards weekTotal={weekTotal} monthTotal={monthTotal} yearTotal={yearTotal} />
      {categoryData.length > 0 && <CategoryChart categoryData={categoryData} />}
      <RecentExpenses expenses={expenses} />
    </div>
  );
}

export default Dashboard;
