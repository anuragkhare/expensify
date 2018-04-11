import * as R from "ramda";

const defaultExpenseState = [];

export default (state = defaultExpenseState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return R.filter(e => e.id !== action.id, state);
    case "EDIT_EXPENSE":
      return R.map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...R.pick(["description", "amount", "createdAt", "note"], action.updates)
          };
        } else {
          return e;
        }
      }, state);
    default:
      return state;
  }
};
