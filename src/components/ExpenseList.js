import React from "react";
import * as R from "ramda";
import ExpenseListItem from "./ExpenseListItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getFilteredExpenses from "../selectors/expenses";
import ReactTable from "react-table";
import "react-table/react-table.css";

const ExpenseList = props => {
  // const columns = [
  //   { Header: "Description", accessor: "description" },
  //   { Header: "Amount", accessor: "amount" },
  //   { Header: "Created", accessor: d => d.createdAt.format(), id: "createdAt" }
  // ];
  return (
    <div>
      <h3>Expense List</h3>
      {<ol>{R.map(e => <ExpenseListItem {...e} key={e.id} />, props.expenses)}</ol>}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  expenses: getFilteredExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);
//{/*<ol>{R.map(e => <ExpenseListItem {...e} key={e.id} />, props.expenses)}</ol>*/}
// <ReactTable data={props.expenses} columns={columns} />