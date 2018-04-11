store.subscribe(() => {
  const state = store.getState();
  console.log(getFilteredExpenses(state.expenses, state.filters));
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 1500500, createdAt: moment() })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: moment() })
);
const expenseThree = store.dispatch(
  addExpense({ description: "Magazines", amount: 9100, createdAt: moment() })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(
  editExpense({
    id: expenseTwo.expense.id,
    updates: { amount: 500000, tag: "*$", id: -1 }
  })
);

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter("ff"));
store.dispatch(setTextFilter());

store.dispatch(sortBy("amount"));
// store.dispatch(sortBy());

store.dispatch(
  setDateFilter(
    moment().subtract(7, "days"),
    moment().subtract(25, "milliseconds")
  )
);
// store.dispatch(setDateFilter("10", "-99"));
// store.dispatch(setDateFilter());
