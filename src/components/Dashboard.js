import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default Dashboard;
