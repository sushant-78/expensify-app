import moment from "moment";
//filter reducer
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TEXT_TO_FILTER":
            return {
                ...state,
                text: action.text,
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date,
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date,
            };
        default:
            return state;
    }
};

export default filterReducer;
