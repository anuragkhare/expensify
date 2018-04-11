import uuid from "uuid";
import moment from "moment";

const addExpense = ({
  description = "",
  amount = 0,
  createdAt = moment()
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    createdAt,
    description,
    amount
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = ({ id, updates = {} }) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export { addExpense, removeExpense, editExpense };
