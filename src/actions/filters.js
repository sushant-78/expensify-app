/*******
filter action generators
********/
//set filter
export const setFilterText = (text = "") => ({
    type: "ADD_TEXT_TO_FILTER",
    text,
});

export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
});

export const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date",
});

export const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date,
});

export const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date,
});
