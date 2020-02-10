import React from "react";

const Button = (props) => {
    return (
        <button 
            disabled={props.Disabled} 
            onClick={props.AddTodo}
        >+ Add</button>
    )
}

export default Button;