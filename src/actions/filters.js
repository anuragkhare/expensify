const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortBy = (by = "date") => ({
  type: "SORT_BY",
  by
});

const setDateFilter = (startDate, endDate) => ({
  type: "SET_DATE_FILTER",
  startDate,
  endDate
});

export { setTextFilter, setDateFilter, sortBy };
