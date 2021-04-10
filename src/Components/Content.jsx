import React from "react"
import axios from "axios"
import DeleteIcon from '@material-ui/icons/Delete';
import { Notes } from "@material-ui/icons";

function Content(props){
    //console.log(props);
    return (
        <div className="note">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
            <button onClick={()=>props.deleteItem(props.id)}>
                <DeleteIcon /> 
            </button>
        </div> 
    )
}

export default Content