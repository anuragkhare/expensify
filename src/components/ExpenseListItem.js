import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import accounting from "accounting";
import { removeExpense } from "../actions/expenses";
import moment from "moment";

const ExpenseListItem = ({ description, amount, createdAt, id, ...props }) => (
  <li>
    <button onClick={() => props.dispatch(removeExpense({ id }))}>x</button>
    <Link to={`/edit/${id}`}>{description}</Link>:{" "}
    {accounting.formatMoney(amount / 100)} @{" "}
    {moment(createdAt).format("MMMM Do, YYYY")}
  </li>
);

export default connect()(ExpenseListItem);
