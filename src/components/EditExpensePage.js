import React from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import PageTitle from "./common/pageTitle";

const EditExpensePage = () => {
    let params = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let expenses = useSelector((state) => state.expenses);

    const selectedExpense = expenses.find((expense) => {
        return expense.id === params.id;
    });

    return (
        <div className="edit-expense-page">
            <PageTitle title={"Edit Expense"} />
            <div className="container">
                <ExpenseForm
                    expense={selectedExpense}
                    onSubmit={(editedExpense) => {
                        dispatch(
                            editExpense(selectedExpense.id, editedExpense)
                        );
                        navigate("/");
                    }}
                />

                <button
                    className="btn-main-style btn-remove-style"
                    onClick={() => {
                        dispatch(removeExpense(selectedExpense.id));
                        navigate("/");
                    }}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default EditExpensePage;
