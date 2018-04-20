// import { addExpense, editExpense } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./firebase/firebase";
// import "./playground/promises";

const store = configureStore();

// const expenseOne = store.dispatch(
//   addExpense({ description: "Rent", amount: 1500500, createdAt: moment() })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Coffee", amount: 300, createdAt: moment() })
// );
// const expenseThree = store.dispatch(
//   addExpense({ description: "Magazines", amount: 9100, createdAt: moment() })
// );
// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(
//   editExpense({
//     id: expenseTwo.expense.id,
//     updates: { amount: 500000, tag: "*$", id: -1 }
//   })
// );

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
