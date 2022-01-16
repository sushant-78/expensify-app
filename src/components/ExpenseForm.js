import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? props.expense.amount / 100 : "",
            note: props.expense ? props.expense.note : "",
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            focused: false,
            error: props.expense ? props.expense.error : "",
        };
    }

    onChangeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onChangeTextArea = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onChangeAmount = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onFocusChange = ({ focused }) => this.setState({ focused });

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt,
            }));
        }
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: "please provide description and amount.",
            }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && (
                    <em className="expense-form__error-msg">
                        {this.state.error}
                    </em>
                )}
                <form className="expense-form" onSubmit={this.onSubmitForm}>
                    <div className="expense-form__container">
                        <input
                            type="text"
                            value={this.state.description}
                            autoFocus
                            placeholder="Description"
                            onChange={this.onChangeDescription}
                        />
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                        />
                        <div className="expense-form__singleDatePicker">
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.focused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>

                        <textarea
                            placeholder="Add a note for your expense (optional)"
                            value={this.state.note}
                            onChange={this.onChangeTextArea}
                        ></textarea>
                    </div>

                    <button className="btn-main-style">Save Expense</button>
                </form>
            </div>
        );
    }
}
