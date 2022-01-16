import { v4 as uuidv4 } from "uuid";
uuidv4();
/*******
expense action gen.
********/
//add expense
export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = "",
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt,
    },
});

//remove expense
export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id,
});

//edit expense
export const editExpense = (id = "", editedExpense = {}) => ({
    type: "EDIT_EXPENSE",
    id,
    ...editedExpense,
});
