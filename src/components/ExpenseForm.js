import React from "react";
import moment from "moment";
import * as R from "ramda";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const { expense, buttonName } = props;
    if (expense) {
      this.state = {
        ...this.state,
        ...expense,
        buttonName,
        amount: parseFloat(expense.amount, 10) / 100
      };
    }
  }

  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calendarFocused: false,
    buttonName: "Add",
    error: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || (amount.match(/^\d{1,}(\.\d{0,2})?$/) && amount !== ".")) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt && moment(createdAt).isValid())
      this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (
      R.none(v => R.isEmpty(v), [this.state.description, this.state.amount])
    ) {
      let expense = {
        ...R.pick(["description", "amount", "createdAt", "note"], this.state),
        amount: parseFloat(this.state.amount, 10) * 100
      };
      this.setState(() => ({ error: "" }));
      this.props.onSubmit(expense);
    } else {
      this.setState(() => ({
        error: "Please enter a valid description and/or amount."
      }));
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>{this.state.buttonName}</button>
          <div>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </form>
      </div>
    );
  }
}
