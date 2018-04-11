import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import faker from "faker";
import moment from "moment";

test("Default state is empty expenses array", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[2].id
  });
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test("Should not remove expense for unknown id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: -1
  });
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    description: faker.commerce.productName(),
    amount: faker.commerce.price(1, 29),
    createdAt: moment(faker.date.recent(7))
  };
  const state = expensesReducer(expenses, { type: "ADD_EXPENSE", expense });
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit an existing expense", () => {
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: { description: "Magazinos" }
  });
  expect(state).toEqual([
    ...expenses.slice(0, 2),
    { ...expenses[2], description: "Magazinos" }
  ]);
});

test("Should not edit a non-existent expense", () => {
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: { description: "Magazinos" }
  });
  expect(state).toEqual(expenses);
});
