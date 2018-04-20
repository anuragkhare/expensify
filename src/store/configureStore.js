import { applyMiddleware, createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
