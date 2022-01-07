import uuid from "uuid";
import database from "../firebase/firebase";

const addExpense = (expense)=>({
    type: 'ADD_EXPENSE',
    expense
});


export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        const {description = '', note='',amount = 0,createdAt =0} = expenseData;
        database.ref('expenses').push({
            description,note,amount,createdAt
        }).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                description,
                note,
                amount,
                createdAt
            }));
        })
    }
};

const removeExpense = ({id = ''} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id = ''} = {})=>{
    return (dispatch)=>{
        database.ref(`expenses/${id}`).remove().then(()=>{
            console.log("Data was removed");
            dispatch(removeExpense({id}));
        })
    }
};

const editExpense = (id, {amount = 0,createdAt =0,description = '', note='',} = {})=>({
    type: 'EDIT_EXPENSE',
    expense: {
        id,
        amount,
        description,
        note,
        createdAt
    }
});

// SET_EXPENSES
export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = ()=>{
    return (dispatch)=>{
        database.ref('expenses').once('value').then((snapshot)=>{
            let expenses = [];
            snapshot.forEach((snap)=>{
                expenses.push({
                    id: snap.key,
                    ...snap.val()
                })
            });
            dispatch(setExpenses(expenses));
        })
    }
};

export {addExpense,removeExpense,editExpense};