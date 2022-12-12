import { API_BASE_URL } from "../../constants/env";
import { TodoType } from "../../feature/TodoContext";
import { getErrorMessage } from "../misc";
import { getToken } from "../token";
import { FieldsValues } from "./auth";
import fetcher from "./fetcher";

const token = getToken();
const header = `Bearer ${token}`;

const getTodos = async () => {
  try {
    const response = await fetcher(`${API_BASE_URL}/todos`, {
      method: "GET",
      headers: {
        Authorization: header,
      },
    });

    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const createTodo = async (fieldsValues: FieldsValues) => {
  try {
    const response = await fetcher(`${API_BASE_URL}/todos`, {
      method: "POST",
      headers: {
        Authorization: header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fieldsValues),
    });

    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const updateTodo = async (value: Omit<TodoType, "userId">) => {
  try {
    const response = await fetcher(`${API_BASE_URL}/todos`, {
      method: "PUT",
      headers: {
        Authorization: header,
        "Content-Type": "application/json",
      },
      params: value.id,
      body: JSON.stringify({
        todo: value.todo,
        isCompleted: value.isCompleted,
      }),
    });

    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const deleteTodo = async (id: number) => {
  try {
    await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: header,
      },
    });
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
