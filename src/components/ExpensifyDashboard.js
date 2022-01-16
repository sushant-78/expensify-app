import React from "react";
import { NavLink } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpensifyDashboard = () => (
    <div className="expensify-dashboard">
        <div className="expensify-dashboard__add-expense">
            <div className=" container ">
                <NavLink to="/create">
                    <button>Add Expense</button>
                </NavLink>
            </div>
        </div>

        <ExpenseListFilter />
        <ExpenseList />
    </div>
);
export default ExpensifyDashboard;
