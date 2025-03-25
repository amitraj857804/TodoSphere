import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { NavLink } from "react-router-dom";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todoMsg, setTodoMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoMsg.trim() === "") {
      setTodoMsg("")
      return;
    }
    addTodo({ id: Date.now(), todoTitle: todoMsg, completed: false });
    setTodoMsg("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-[#ef4343] hover:bg-[#945252] text-white shrink-0 cursor-pointer duration-200"
        >
          Add
        </button>
      </form>
      <div className="w-full flex gap-3 justify-center items-center py-2 text-slate-200">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `cursor-pointer hover:font-semibold ${
              isActive ? "underline font-semibold" : ""
            } `
          }
        >
          All
        </NavLink>
        <NavLink
          to="pendingTodo"
          className={({ isActive }) =>
            `cursor-pointer hover:font-semibold ${
              isActive ? "underline font-semibold" : ""
            } `
          }
        >
          Pending
        </NavLink>
        <NavLink
          to="/completeTodo"
          className={({ isActive }) =>
            `cursor-pointer hover:font-semibold ${
              isActive ? "underline font-semibold" : ""
            } `
          }
        >
          Completed
        </NavLink>
     
      </div>
    </>
  );
}

export default TodoForm;
