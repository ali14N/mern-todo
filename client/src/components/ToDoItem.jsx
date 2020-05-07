import React from "react";
function ToDoItem(props) {
    return (
        <div
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li>{props.todoItem.todo}</li>
        </div>
    );
}
export default ToDoItem;
