import React from 'react';
import {ExpenseForm} from "../components/ExpenseForm";
import { connect } from "react-redux";
import {startAddExpense} from "../actions/expenses";

const AddExpensePage =(props)=>{
    function onSubmit(expense){ 
        console.log(expense);
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
    }
    
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect()(AddExpensePage)