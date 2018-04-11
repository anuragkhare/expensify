import * as R from "ramda";
import moment from "moment";

const defaultFilterState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = defaultFilterState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.by
      };
    case "SET_DATE_FILTER":
      return {
        ...state,
        ...R.pick(["startDate", "endDate"], action)
      };
    default:
      return state;
  }
};
