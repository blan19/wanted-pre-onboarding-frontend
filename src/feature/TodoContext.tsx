import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTodos } from "../utils/api/todo";
import { FieldsValues } from "../utils/api/auth";
import * as todoService from "../utils/api/todo";

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoContextType {
  todos: TodoType[];
  createTodo: (fieldsValue: FieldsValues) => Promise<void>;
  updateTodo: (data: Omit<TodoType, "userId">) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType>(null!);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodo = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const createTodo = async (fieldsValue: FieldsValues) => {
    const todo = await todoService.createTodo(fieldsValue);
    setTodos((prev) => prev.concat(todo));
  };

  const updateTodo = (value: Omit<TodoType, "userId">) => {
    todoService.updateTodo(value).then((update) => {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === value.id ? update : todo))
      );
    });
  };

  const deleteTodo = (id: number) => {
    todoService.deleteTodo(id).then(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  };

  const value = useMemo(
    () => ({ todos, createTodo, updateTodo, deleteTodo }),
    [todos]
  );

  useEffect(() => {
    void fetchTodo();
  }, []);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

const useTodos = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoProvider, useTodos };
export type { TodoType };
