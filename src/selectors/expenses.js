import * as R from "ramda";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return R.sort(
    (a, b) =>
      sortBy === "date" ? a.createdAt.diff(b.createdAt) : a.amount - b.amount, // sort by amount
    R.filter(e => {
      const startDateMatch = startDate
        ? e.createdAt.isSameOrAfter(startDate)
        : true;
      const endDateMatch = endDate ? e.createdAt.isSameOrBefore(endDate) : true;
      const textMatch =
        R.isEmpty(text) ||
        !R.isEmpty(R.match(new RegExp(text, "i"), e.description));
      return startDateMatch && endDateMatch && textMatch;
    }, expenses)
  );
};
