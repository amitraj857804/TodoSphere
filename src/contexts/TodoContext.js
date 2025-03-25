import React , {createContext ,useContext} from 'react'

export const todoContext = createContext({
  todos: [
    {
        id: 1,
        todoTitle: "todo1",
        completed: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {}
});

export const TodoProvider = todoContext.Provider;

export function useTodo() {
  return useContext(todoContext)
}
