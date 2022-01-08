import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";



const PublicRoute = (props)=>{
    const isAuthenticated = props.isAuthenticated;
    const Component = props.component;   
    
    const isAuthenticatedCheck = ()=>(
        isAuthenticated?(<Redirect to="/dashboard"></Redirect>):(<Component {...props}></Component>)
    );
    
    return (
        <Route {...props} component = {isAuthenticatedCheck} />
    )
};

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid 
})

export default connect(mapStateToProps)(PublicRoute)