import * as R from "ramda";
import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return R.sort(
    (a, b) =>
      sortBy === "date"
        ? moment(a.createdAt).diff(moment(b.createdAt))
        : a.amount - b.amount, // sort by amount
    R.filter(e => {
      const createdAt = moment(e.createdAt);
      const startDateMatch = startDate
        ? createdAt.isSameOrAfter(startDate)
        : true;
      const endDateMatch = endDate ? createdAt.isSameOrBefore(endDate) : true;
      const textMatch =
        R.isEmpty(text) ||
        !R.isEmpty(R.match(new RegExp(text, "i"), e.description));
      return startDateMatch && endDateMatch && textMatch;
    }, expenses)
  );
};
