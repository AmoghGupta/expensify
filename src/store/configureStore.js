import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import uuid from "uuid";
import {expensesReducer} from "../reducers/expense";
import {filterReducer} from "../reducers/filters";
import { authReducer } from "../reducers/auth";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default ()=>{
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};




