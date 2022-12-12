import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTodos } from "../utils/api/todo";

interface TodoContextType {
  todos: any;
  createTodo: (todo: string, callback: VoidFunction) => void;
  updateTodo: (todo: string, callback: VoidFunction) => void;
  deleteTodo: (callback: VoidFunction) => void;
}

const TodoContext = createContext<TodoContextType>(null!);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<any>(null);

  const createTodo = (todo: string, callback: VoidFunction) => {};

  const updateTodo = (todo: string, callback: VoidFunction) => {};

  const deleteTodo = (callback: VoidFunction) => {};

  const value = useMemo(
    () => ({ todos, createTodo, updateTodo, deleteTodo }),
    [todos]
  );

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    void fetchData();
  }, []);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

const useTodos = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoProvider, useTodos };
