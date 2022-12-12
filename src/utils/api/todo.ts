import { API_BASE_URL } from "../../constants/env";
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

const updateTodo = async (id: number, todo: string) => {
  try {
    const response = await fetcher(`${API_BASE_URL}/todos`, {
      method: "PUT",
      headers: {
        Authorization: header,
        "Content-Type": "application/json",
      },
      params: id,
      body: JSON.stringify({ todo }),
    });

    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const deleteTodo = async (id: number) => {
  try {
    const response = await fetcher(`${API_BASE_URL}/todos`, {
      method: "DELETE",
      headers: {
        Authorization: header,
      },
      params: id,
    });

    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
