import React from "react";
import { useTodo } from "../contexts/TodoContext";

function ClearComplete() {
  const { todos, deleteTodo } = useTodo();
  
  const handleClick = () => {
    todos.map((todo) => (todo.completed === true ? deleteTodo(todo.id) : ""));
  };

  return (
    
      <button
        className="cursor-pointer hover:underline underline lg:no-underline  duration-200"
        onClick={handleClick}
      >
        {" "}
        Clear Completed
      </button>
    
  );
}

export default ClearComplete;
