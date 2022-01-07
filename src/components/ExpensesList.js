import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import {getVisibleExpenses} from "../selectors/expenses";

const ExpensesList =(props)=>(
    <div>
       {props.expenses.map((expense)=>{
            return <ExpensesListItem key={expense.id} item={expense}></ExpensesListItem>
       })}
    </div>
)

const mapStateToProps  = (state)=>{
    return {
        expenses: getVisibleExpenses(state.expenses,state.filters),
    };
};

export default connect(mapStateToProps)(ExpensesList);