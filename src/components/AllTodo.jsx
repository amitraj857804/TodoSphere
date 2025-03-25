import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { TodoList, ClearComplete, ClearPending } from "./index";

function AllTodo() {
  const { todos } = useTodo();
  const pendingTodo = todos.filter((todoItem) => todoItem.completed === false);
  const completeTodo = todos.filter((todoItem) => todoItem.completed === true);

  if (!todos || todos.length === 0) {
    return (
      <div className="flex flex-wrap items-center justify-center my-10">
        No todos available
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col mt-4 gap-y-3 mb-4 sm:min-h-[50vh]">
        {/*Loop and Add TodoItem here */}
        {pendingTodo.map((todoItem) => (
          <div key={todoItem.id} className="w-full">
            <TodoList todo={todoItem} />
          </div>
        ))}
        {completeTodo.map((todoItem) => (
          <div key={todoItem.id} className="w-full">
            <TodoList todo={todoItem} />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-5 py-1">
        <ClearPending />
        <ClearComplete />
      </div>
    </>
  );
}

export default AllTodo;
