import React from "react";
function InputArea(props) {
    return (
        <form className="form">
            <input
                onChange={props.handleChange}
                type="text"
                value={props.inputText}
            />
            <button onClick={props.addItem}>
                <span>Add</span>
            </button>
        </form>
    );
}
export default InputArea;
