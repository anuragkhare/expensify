import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import moment from "moment";

test("generate remove expense action", () => {
  expect(removeExpense({ id: "123abc" })).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("generate edit expense action", () => {
  expect(
    editExpense({
      id: "123abc",
      updates: { description: "April Rent" }
    })
  ).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { description: "April Rent" }
  });
});

test("generate add expense with provided values", () => {
  const now = moment();
  const expense = { description: "Rent", amount: 2100, createdAt: now };
  expect(addExpense(expense)).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expense, id: expect.any(String) }
  });
});

test("generate add expense with default values", () => {
  const now = moment();
  const expense = { createdAt: now };
  expect(addExpense(expense)).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expense, id: expect.any(String), description: "", amount: 0 }
  });
});
