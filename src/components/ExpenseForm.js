import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: props.expense?props.expense.description:'',
            note: props.expense?props.expense.note:'',
            amount: props.expense?props.expense.amount:'',
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            calendarFocused: false,
            errorMessage: undefined
        };
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({
            description: description
        }));
    }

    onNoteChange = (evt)=>{
        const note = evt.target.value;
        this.setState(()=>({
            note: note
        }));
    }

    onAmountChange = (evt)=>{
        const amount = evt.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({
                amount
            }));
        }
    }

    onDateChanged = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({
                createdAt
            }));
        }
       
    };

    onFocusChanged = ({focused})=>{
        this.setState(()=>({
            calendarFocused: focused
        }));
    }

    onSubmit= (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                errorMessage: 'Please provide description and amount.'
            }));
        }else{
            this.setState(()=>({
                errorMessage: undefined
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    removeExpenseFromList = ()=>{
        this.props.removeExpenseFromList();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" 
                    autoFocus 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}
                    />
                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="Amount" />
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChanged}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChanged}
                        numberOfMonths = {1}
                        isOutsideRange = {()=>false}
                    ></SingleDatePicker>
                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for expense (optional)"></textarea>
                    {!this.props.expense && <button>Add Expense</button>}
                    {this.props.expense && <button>Update Expense</button>}                
                    {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                </form>
                {this.props.expense && <button onClick={this.removeExpenseFromList}>Remove Expense</button>}
            </div>
        )
    }

}

export {ExpenseForm}