import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("find expenses that contain the letter 'z' from the past 3 days", () => {
  const filters = {
    text: "z",
    sortBy: "date",
    startDate: moment().subtract(3, "days"),
    endDate: moment()
  };

  expect(selectExpenses(expenses, filters)).toContain(expenses[2]);
});

test("find expenses sorted by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: moment(0),
    endDate: moment()
  };

  expect(selectExpenses(expenses, filters)).toEqual([
    expenses[0],
    expenses[2],
    expenses[1]
  ]);
});
