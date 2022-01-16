import React from "react";

import { Link } from "react-router-dom";

const ExpenseListItem = (props) => (
    <Link Link to={`/edit/${props.id}`}>
        <tr className="expense-list__row">
            <td className="expense-list__first-data-cell">
                <div>{props.description}</div>
                <div>{new Date(props.createdAt).toDateString()}</div>
            </td>
            <td>
                <div>${props.amount}</div>
            </td>
        </tr>
    </Link>
);
export default ExpenseListItem;
