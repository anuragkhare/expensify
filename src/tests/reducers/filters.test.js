import filterReducer from "../../reducers/filters";
import moment from "moment";

test("Default filter reducer state", () => {
  const defaultState = filterReducer(undefined, { type: "@@INIT" });
  expect(defaultState).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sort by to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY", by: "amount" });
  expect(state.sortBy).toBe("amount");
});

test("Should set sort by to amount", () => {
  const state = filterReducer(
    { sortBy: "amount" },
    { type: "SORT_BY", by: "date" }
  );
  expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
  const state = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
  expect(state.text).toBe("rent");
});

test("Should set date filters", () => {
  const state = filterReducer(undefined, {
    type: "SET_DATE_FILTER",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });

  expect(state.startDate).toEqual(moment().startOf("month"));
  expect(state.endDate).toEqual(moment().endOf("month"));
});
