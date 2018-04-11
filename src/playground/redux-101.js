import { createStore } from "redux";

const store = createStore((state = { count: 0 }, { type, ...attrs = {} }) => {
  switch (type) {
    case "INCREMENT":
      return {
        count: state.count + (attrs.hasOwnProperty("by") ? attrs.by : 1)
      };
    case "DECREMENT":
      return {
        count: state.count - (attrs.hasOwnProperty("by") ? attrs.by : 1)
      };
    case "SET":
      return {
        count: attrs.to
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const incrementCount = ({ by = 1 } = {}) => ({ type: "INCREMENT", by });
const decrementCount = ({ by = 1 } = {}) => ({ type: "DECREMENT", by });
const setCount = ({ to = 1 } = {}) => ({ type: "SET", to });
const resetCount = () => ({ type: "RESET" });

store.subscribe(() => console.log(store.getState()));


store.dispatch(incrementCount());
store.dispatch(incrementCount({by: 10}));
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({by: 100}));
store.dispatch(setCount({to: 99}));