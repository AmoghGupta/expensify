// import React from "react";
// import ReactDOM from  "react-dom";
// import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
// import 'normalize.css/normalize.css'
// import './styles/styles.scss';
// import {AppRouter} from "./routers/AppRouter";



// ReactDOM.render(AppRouter, document.getElementById('app'));

import { createStore } from "redux";

let defaultState = {
    count:0
}

const incrementCount = ({ incrementBy =1 } = {})=>{
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({decrementBy = 1} = {})=>{
    return {
        type: 'DECREMENT',
        decrementBy
    }
};

const resetCount = ()=>{
    return {
        type: 'RESET'
    }
};

const setCount = ({count =0}={})=>{
    return {
        type: 'SET',
        count
    }
};

// reducers
const countReducer = (state = defaultState, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {
                count: action.incrementBy? state.count+action.incrementBy:state.count+1
            }
            break;
        case "DECREMENT":
            return {
                count: action.decrementBy? state.count-action.decrementBy:state.count-1
            }
            break;
        case "RESET":
                return {
                    count: 0
                }
                break;
        case "SET":
            return {
                count: action.count
            }
            break;
        default:
            return state;
    }  
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());    
});
store.dispatch(incrementCount({incrementBy:2}));
// unsubscribe();
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(resetCount());
store.dispatch(setCount({count:5}));

