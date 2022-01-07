import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import React from 'react';

const Header = (props)=>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

export {Header};