import ExpensesList from "../components/ExpensesList";
import ExpenseListFilters from "../components/ExpenseListFilters";
import { connect } from "react-redux";
import {startSetExpenses} from "../actions/expenses";

const ExpenseDashboardPage =(props)=>{
    
    props.dispatch(startSetExpenses());
    
    return (
        <div>
            <ExpenseListFilters/>
            <ExpensesList/>
        </div>
    )
}

export default connect()(ExpenseDashboardPage)