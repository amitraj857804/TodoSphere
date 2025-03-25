import React from "react";
import { useTodo } from "../contexts/TodoContext";

function ClearPending() {
  const { todos, deleteTodo } = useTodo();

  const handleClick = () => {
    todos.map((todo) => (todo.completed === false ? deleteTodo(todo.id) : ""));
  };

  return (
   
      <button
        className="cursor-pointer hover:underline  duration-200"
        onClick={handleClick}
      >
        {" "}
        Clear Pending
      </button>
  
  );
}

export default ClearPending;
