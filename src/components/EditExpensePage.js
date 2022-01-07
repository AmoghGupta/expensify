import {ExpenseForm} from "../components/ExpenseForm";
import { connect } from "react-redux";
import {editExpense, startRemoveExpense} from "../actions/expenses";

const EditExpensePage =(props)=>{

    const onSubmit = (expense)=>{
        console.log(expense);
        props.dispatch(editExpense(props.match.params.id,expense));
        props.history.push('/');
    }

    const removeExpenseFromList =()=>{
        props.dispatch(startRemoveExpense({id:props.match.params.id}));
        props.history.push('/');
    }

    return (
        <div>
            <h1>Editing expense:{props.match.params.id}</h1>
            {props.expense && <ExpenseForm removeExpenseFromList={removeExpenseFromList} onSubmit={onSubmit} expense = {props.expense}/>}
            {!props.expense && <p>{'No such expense exists'}</p>}
        </div>
    )
}

const mapStateToProps  = (state,props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);