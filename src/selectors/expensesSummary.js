import * as R from "ramda";
import accounting from "accounting";

const sumExpenses = expenses => {
  return accounting.formatMoney(
    R.reduce((acc, e) => acc + e.amount, 0, expenses) / 100
  );
};

export default sumExpenses;
