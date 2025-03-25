import React, { useEffect, useState } from "react";
import { TodoList } from "./index";
import ClearComplete from "./ClearComplete";
import { useLoaderData } from "react-router-dom";

function CompleteTodo() {

  const todoCompleted = useLoaderData();



  if (!todoCompleted || todoCompleted.length === 0) {
    return (
      <div className="flex flex-wrap items-center justify-center my-10">
        You haven't completed any task yet
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-y-3 mb-4 sm:min-h-[50vh] mt-4">
        {/*Loop and Add TodoItem here */}
        {todoCompleted.map((todoItem) => (
          <div key={todoItem.id} className="w-full">
            <TodoList todo={todoItem} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end py-1">
        <ClearComplete />
      </div>
    </>
  );
}

export default CompleteTodo;

export const completeLoader = ({ context }) => {
  const todos = context.todos; 
  return todos.filter((todo) => todo.completed); 
};

