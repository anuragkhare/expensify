import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortBy, setDateFilter } from "../actions/filters";

class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setDateFilter(startDate, endDate));
  };

  onFocusChange = calendarFocused => this.setState(() => ({ calendarFocused }));

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => this.props.dispatch(sortBy(e.target.value))}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="MyDatePicker"
          endDateId="MyDatePicker"
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });
export default connect(mapStateToProps)(ExpenseListFilter);
