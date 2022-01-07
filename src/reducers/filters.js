import moment from "moment";

const filterDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filterReducer = (state = filterDefaultState, action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
            break;
        case "SORT_BY_AMOUNT_FILTER":
        case "SORT_BY_DATE_FILTER":
            return {
                ...state,
                sortBy:action.sortBy
            }
            break;
        case "SET_START_DATE":
            return {
                ...state,
                startDate:action.startDate
            }
            break;
        case "SET_END_DATE":
            return {
                ...state,
                endDate:action.endDate
            }
            break;
        default:
            return state;
    }
};

export {filterReducer}