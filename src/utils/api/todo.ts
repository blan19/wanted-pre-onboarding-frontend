import { API_BASE_URL } from "../../constants/env";
import { getErrorMessage } from "../misc";
import { getToken } from "../token";
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

export { getTodos };
