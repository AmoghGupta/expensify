const setTextFilter = ({text = ''} = {})=>({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = ({sortBy}={})=>({
    type: 'SORT_BY_AMOUNT_FILTER',
    sortBy
});

const sortByDate = ({sortBy}={})=>({
    type: 'SORT_BY_DATE_FILTER',
    sortBy
});

const setStartDate = (startDate = undefined)=>({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined)=>({
    type: 'SET_END_DATE',
    endDate
});

export {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate}