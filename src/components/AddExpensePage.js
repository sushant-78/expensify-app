import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import PageTitle from "./common/pageTitle";

const AddExpensePage = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    return (
        <div>
            <PageTitle title={"Add Expense"} />
            <div className="container">
                <ExpenseForm
                    onSubmit={(expense) => {
                        dispatch(addExpense(expense));
                        navigate("/");
                    }}
                />
            </div>
        </div>
    );
};

export default AddExpensePage;
