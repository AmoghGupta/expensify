import React from 'react';
import { connect } from "react-redux";
import {startLogin} from "../actions/auth";

const LoginPage =(props)=>{
    
    function onLogin(){ 
        props.dispatch(startLogin());
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}

export default connect()(LoginPage)