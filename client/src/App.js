import React, { useState, useEffect } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
import axios from 'axios'
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([
  ]);
  useEffect(() => {
    getTodos()
  }, [])
  function getTodos() {
    axios.get('/todos')
      .then((res) => {
        console.log("Data fetched")
        const data = res.data
        console.log(data)
        setItems(data)
      })
      .catch(err => console.log("Error while fetching from DB: " + err))
  }
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, { text: inputText }];
    });
    const payload = {
      text: inputText
    }
    axios({
      url: '/todos/add',
      method: 'POST',
      data: payload
    }).then(() => console.log("Data has been sent to Server"))
      .catch(err => console.log("Error: " + err))
    setInputText("");
  }
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        addItem={addItem}
        handleChange={handleChange}
        inputText={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              todoItem={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
