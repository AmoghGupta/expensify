import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import React from 'react';
import {startLogout} from "../actions/auth";
import { connect } from "react-redux";

const Header = (props)=>{

    function logout(){
        props.dispatch(startLogout());
    }

    return (
        <header>
            <h1>Expensify App</h1>
            <NavLink exact={true}  to={'/dashboard'} activeClassName="is-active">Go Home</NavLink>
            <NavLink exact={true} to={'/create'} activeClassName="is-active">Add Expense</NavLink>
            <NavLink exact={true} to={'/help'} activeClassName="is-active">Help</NavLink>
            <button onClick={logout}>Logout</button>
        </header>
    )
}


export default connect()(Header);