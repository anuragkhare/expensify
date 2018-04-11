import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpense = props => {
  // const { id } = props.match.params;
  // const currentExpense = R.find(R.propEq("id", id), props.expenses);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        buttonName="Edit"
        onSubmit={updates => {
          props.dispatch(editExpense({ id: props.id, updates }));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: R.find(R.propEq("id", props.match.params.id), state.expenses),
  id: props.match.params.id
});
export default connect(mapStateToProps)(EditExpense);
