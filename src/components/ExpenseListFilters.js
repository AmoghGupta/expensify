import React from "react";
import { connect } from "react-redux";
import {setTextFilter} from "../actions/filters";
import {sortByAmount, sortByDate ,setStartDate, setEndDate} from "../actions/filters";
import {DateRangePicker}  from "react-dates";
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused: null,
    };

    filterChanged = (evt)=>{
        let filterValue = evt.target.value;
        //dispatching action
        this.props.dispatch(setTextFilter({text:filterValue}));
    }

    sortingChanged = (evt)=>{
        const selectedSort = evt.target.value;
        if(selectedSort === 'amount'){
            this.props.dispatch(sortByAmount({sortBy:selectedSort}));
        }else{
            this.props.dispatch(sortByDate({sortBy:selectedSort}));
        }
        
    }

    onDatesChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange= (calendarFocused)=>{
        this.setState(()=>({
            calendarFocused
        }));
    }

    render(){
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={this.filterChanged} />
                <select defaultValue={this.props.filters.sortBy} onChange={this.sortingChanged}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {()=>false}
                ></DateRangePicker>
            </div>
        );
    }
}

// adds filters to props
const mapStateToProps  = (state)=>{
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters)