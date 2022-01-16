import React from "react";
import { connect } from "react-redux";
import {
    setFilterText,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
        };
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (focusedInput) => {
        this.setState({ focusedInput });
    };

    render() {
        return (
            <form className="container expense-list-filter-form">
                <input
                    className="expense-list-filter-form__input"
                    type="text"
                    value={this.props.filter.text}
                    placeholder="Search expenses"
                    onChange={(e) => {
                        this.props.dispatch(setFilterText(e.target.value));
                    }}
                />
                <select
                    className="expense-list-filter-form__select"
                    value={this.props.filter.sortBy}
                    onChange={(e) => {
                        if (e.target.value === "date") {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    className="expense-list-filter-form__date-range-picker"
                    startDateId="start"
                    endDateId="end"
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </form>
        );
    }
}

const MapStateToProps = (state) => ({
    filter: state.filter,
});

export default connect(MapStateToProps)(ExpenseListFilter);
