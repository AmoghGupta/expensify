import React from 'react';
import ReactDOM from  "react-dom";
import { Provider } from "react-redux";
import {AppRouter, history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {firebase} from './firebase/firebase';
import {startSetExpenses} from "./actions/expenses";
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
)

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        console.log("Logged in");
        store.dispatch(startSetExpenses()).then(()=>{
            ReactDOM.render(jsx, document.getElementById('app'));
        });
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
        
    }else{
        store.dispatch(logout());
        console.log("Log out");
        history.push('/');
        ReactDOM.render(jsx, document.getElementById('app'));
    }
});

