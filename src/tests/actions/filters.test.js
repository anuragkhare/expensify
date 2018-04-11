import { setTextFilter, sortBy, setDateFilter } from "../../actions/filters";
import moment from "moment";

test("generate date filter action", () => {
  const startDate = moment(0);
  const endDate = moment();
  expect(setDateFilter(startDate, endDate)).toEqual({
    type: "SET_DATE_FILTER",
    startDate,
    endDate
  });
});

test("generate text filter using provided argument", () => {
  expect(setTextFilter("rent")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
});

test("generate text filter using default argument", () => {
  expect(setTextFilter()).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("generate sort by date filter action", () => {
  expect(sortBy()).toEqual({ type: "SORT_BY", by: "date" });
});

test("generate sort by amount filter action", () => {
  expect(sortBy("amount")).toEqual({ type: "SORT_BY", by: "amount" });
});
