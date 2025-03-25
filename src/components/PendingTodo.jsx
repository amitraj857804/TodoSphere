import React, { useEffect, useState } from "react";
import { TodoList, ClearPending } from "./index";
import { useTodo } from "../contexts/TodoContext";
import { useLoaderData } from "react-router-dom";

function PendingTodo() {
  // const todoPending = useLoaderData();
  const { todos } = useTodo(); 
    const todoPending = todos.filter((todo) => !todo.completed);

  if (!todoPending || todoPending.length === 0) {
    return (
      <div className="flex flex-wrap items-center justify-center my-10">
      You haven't any pending tasks
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-y-3 mt-4 mb-4 sm:min-h-[50vh]">
        {/*Loop and Add TodoItem here */}
        {todoPending.map((todoItem) => (
          <div key={todoItem.id} className="w-full">
            <TodoList todo={todoItem} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end py-1">
        <ClearPending />
      </div>
    </>
  );
}

export default PendingTodo;

export const pendingLoader = ({ context }) => {
  const todos = context.todos; 
  return todos.filter((todo) => !todo.completed); 
};
