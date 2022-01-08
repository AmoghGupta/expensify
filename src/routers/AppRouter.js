import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import {HelpPage} from "../components/HelpPage";
import  ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import {PageNotFound} from "../components/PageNotFound";
import LoginPage from "../components/LoginPage";
import { createBrowserHistory } from 'history';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const history = createBrowserHistory();

const AppRouter = ()=>(
    <Router history={history}>
        <div>            
            <Switch>
                <PublicRoute path={'/'} component={LoginPage} exact={true}/>
                <PrivateRoute path={'/dashboard'} component={ExpenseDashboardPage} />
                <PrivateRoute path={'/create'} component={AddExpensePage} />
                <PrivateRoute path={'/edit/:id'} component={EditExpensePage} />
                <PrivateRoute path={'/help'} component={HelpPage} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>  
    </Router>
);

export {AppRouter}