import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import Selector from "../selectors/expenses";

const ExpenseList = () => {
    let expenses = useSelector((state) => {
        return { expenses: Selector(state.expenses, state.filter) };
    });

    return (
        <div className="expense-list">
            <table className="container expense-list__table">
                <tr className="expense-list__header">
                    <th>Expense</th>
                    <th>Amount</th>
                </tr>
                {expenses.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })}
            </table>
        </div>
    );
};

export default ExpenseList;
