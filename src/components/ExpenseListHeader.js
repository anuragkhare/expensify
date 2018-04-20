import React from "react";
import { connect } from "react-redux";
import sumExpenses from "../selectors/expensesSummary";
import getFilteredExpenses from "../selectors/expenses";

const ExpenseListHeader = ({ numExpenses, sumExpenses }) => {
  // const total = accounting.formatMoney(
  //   R.reduce((acc, e) => acc + e.amount, 0, expenses) / 100
  // );
  return (
    <div>
      Viewing {numExpenses} {numExpenses === 1 ? "expense" : "expenses"}. Total:{" "}
      {sumExpenses}
    </div>
  );
};

const mapStateToProps = state => ({
  numExpenses: getFilteredExpenses(state.expenses, state.filters).length,
  sumExpenses: sumExpenses(getFilteredExpenses(state.expenses, state.filters))
});
export default connect(mapStateToProps)(ExpenseListHeader);
