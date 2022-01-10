import React from 'react';
import { connect } from "react-redux";
import {startLogin} from "../actions/auth";

const LoginPage =(props)=>{
    
    function onLogin(){ 
        props.dispatch(startLogin());
    }
    
    return (
        <div className='base-layout'>
            <div className='box-layout'>
                <h1>Expensify App</h1>
                <p>Its time to get your expenses under control.</p>
                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    );
}

export default connect()(LoginPage)