import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

const PageNotFound =(props)=>(
    <div>
        Page not found - 404
        <Link to="/">Go Home</Link>
    </div>
)

export {PageNotFound};