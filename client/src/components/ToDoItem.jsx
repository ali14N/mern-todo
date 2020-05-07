import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function ToDoItem(props) {
    return (
        <div className="delete">
            <li>
                {props.todoItem.todo}
                <button
                    onClick={() => {
                        props.deleteItem(props.todoItem._id);
                    }}>
                    <DeleteIcon />
                </button>
            </li>
        </div>
    );
}
export default ToDoItem;
