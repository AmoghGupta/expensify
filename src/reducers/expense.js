const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action)=>{
    switch(action.type){
        case "SET_EXPENSES":
            return [...action.expenses];
            break;
        case "ADD_EXPENSE":
            return [...state,action.expense];
            break;
        case "REMOVE_EXPENSE":
            return state.filter((expense)=>{
                return expense.id != action.id
            })
            break;

        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if(expense.id == action.expense.id){
                    return {
                        ...expense,
                        amount:action.expense.amount,
                        description:action.expense.description,
                        note:action.expense.note,
                        createdAt:action.expense.createdAt
                    }
                }else{
                    return expense;
                }
            });
            break;
        default:
            return state;
    }
};

export {expensesReducer}