import React from "react";
import {connect} from "react-redux";
import Header from "../components/Header";
import {Route, Redirect} from "react-router-dom";



const PrivateRoute = (props)=>{
    const isAuthenticated = props.isAuthenticated;
    const Component = props.component;   
    
    const isAuthenticatedCheck = ()=>(
        isAuthenticated?(<Component {...props}></Component>):(<Redirect to="/"></Redirect>)
    );
    
    return (
        <div>
            <Header></Header>
            <Route {...props} component = {isAuthenticatedCheck} />
        </div>
    )
};

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid 
})

export default connect(mapStateToProps)(PrivateRoute)