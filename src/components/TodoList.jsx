import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import {
  MdOutlineRadioButtonUnchecked,
  MdEdit,
  MdSave,
  MdDelete,
} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function TodoList({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todoTitle);
  const [error, setError] = useState("");
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    if (todoMsg.trim() === "") {
      setError("Please enter your task"); 
      return;
    }
    updateTodo(todo.id, { ...todo, todoTitle: todoMsg });
    setIsTodoEditable(false);
    setError(""); 
  };

  const toogle = () => {
    toggleTodo(todo.id);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isTodoEditable) {
      editTodo();
    }
  };


  return (
    <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300  text-black ${
        todo.completed ? "bg-[#c63232d0]" : "bg-white"
      }`}
    >
      <div onClick={toogle} className="cursor-pointer">
        {todo.completed === true ? (
          <FaCheckCircle className="h-6 w-7" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="h-7 w-7" />
        )}
      </div>
      <div className="flex flex-col w-full">
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "  py-0.5 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          onKeyDown={handleKeyDown} 
          readOnly={!isTodoEditable}
          required
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
      {/* Edit, Save Button */}
      <button
      type="submit"
        className="inline-flex w-8 h-8 rounded-lg text-sm border cursor-pointer border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <MdSave className="w-5 h-5" />
        ) : (
          <MdEdit className="w-5 h-5" />
        )}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border cursor-pointer border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <MdDelete className="w-5 h-5" />
      </button>
    </div>
  );
}

export default TodoList;
