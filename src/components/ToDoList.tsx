import React, { useState } from "react";
import Button from "./Button";

const ToDoList = ({ todos }) => {
  const [list, setList] = useState(['1', '2', '3']);

  function addTodo() {
    setList(() => [...prev, newTodo]);
  }

  function deleteTodo() {
    alert("deleted");
  }

  return (
    <>
      <div>
        <input type="text" />
        <Button onClick={addTodo} text="Add task"></Button>
      </div>
      <ul>
        {list.map((todo, index) => (
          <li onClick={deleteTodo} key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
