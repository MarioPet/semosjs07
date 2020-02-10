import React from "react";

const Field = (props) => {
    return (
        <input
            type="text"
            placeholder="Write  your Todo here..."
            onChange={props.HandleTodoValue}
            value={props.value}
        />
    )
}

export default Field;