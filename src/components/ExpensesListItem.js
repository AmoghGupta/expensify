import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const ExpensesListItem =(props)=>{
    return (
        <div>
            <h3>{props.item.description}</h3>
            <p>{props.item.amount} - {moment(props.item.createdAt).format("YYYY-MM-DD HH:mm:ss")} -  {props.item.note}</p>            
            <Link to={'/edit/'+props.item.id}>Edit </Link>
        </div>
    )
}

export default connect()(ExpensesListItem)