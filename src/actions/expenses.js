// import uuid from "uuid";
import moment from "moment";
import database from "../firebase/firebase";

const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

const startAddExpense = ({
  description = "",
  amount = 0,
  createdAt = moment().toJSON()
} = {}) => {
  return dispatch => {
    const expense = { description, amount, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = ({ id, updates = {} }) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export { addExpense, removeExpense, editExpense, startAddExpense };
