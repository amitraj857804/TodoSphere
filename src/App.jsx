import { useEffect, useState, useRef } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, AllTodo, PendingTodo, CompleteTodo } from "./components/index";
import { pendingLoader } from "./components/PendingTodo";
import { completeLoader } from "./components/CompleteTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [displayTitle, setDisplayTitle] = useState("");
  const [displayDesc, setDisplayDesc] = useState("");

  const title = "TodoSphere";
  const description = "A whole world of task management";

  const titleIndexRef = useRef(0);
  const descIndexRef = useRef(0);

  useEffect(() => {
    setDisplayTitle("");
    titleIndexRef.current = 0;

    const interval = setInterval(() => {
      if (titleIndexRef.current < title.length) {
        setDisplayTitle(title.slice(0, titleIndexRef.current + 1));
        titleIndexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [title]);

  useEffect(() => {
    setDisplayDesc("");
    descIndexRef.current = 0;

    const interval = setInterval(() => {
      if (descIndexRef.current < description.length) {
        setDisplayDesc(description.slice(0, descIndexRef.current + 1));
        descIndexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [description]);

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<AllTodo />} />
        <Route
          loader={() => pendingLoader({ context: { todos } })}
          path="pendingTodo"
          element={<PendingTodo />}
        />
        <Route
          loader={() => completeLoader({ context: { todos } })}
          path="completeTodo"
          element={<CompleteTodo />}
        />
      </Route>
    )
  );

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, toggleTodo, deleteTodo }}
    >
      <div className="bg-gradient-to-b from-[#dc8f8f] to-[#c25252e4] min-h-screen py-8">
       
        <div className="w-full max-w-2xl mx-auto sm:shadow-[#6e4f4f] shadow-2xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-1">
            {displayTitle}
          </h1>
          <h1 className="text-md font-bold text-center mb-4">{displayDesc}</h1>
          <RouterProvider router={router} />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
