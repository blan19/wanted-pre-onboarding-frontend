import { API_BASE_URL } from "../../constants/env";
import fetcher from "./fetcher";
import { getErrorMessage } from "../misc";
import { resetToken, setToken } from "../token";

interface FieldsValues {
  [key: string]: FormDataEntryValue;
}

const signUp = async (fieldsValues: FieldsValues) => {
  try {
    const response = await fetcher(`${API_BASE_URL}/auth/signup`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(fieldsValues),
    });

    setToken(response.access_token);

    return response;
  } catch (error) {
    resetToken();

    throw new Error(getErrorMessage(error));
  }
};

const signIn = async (fieldsValues: FieldsValues) => {
  try {
    const response = await fetcher(`${API_BASE_URL}/auth/signin`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(fieldsValues),
    });

    setToken(response.access_token);

    return response;
  } catch (error) {
    resetToken();

    throw new Error(getErrorMessage(error));
  }
};

export { signUp, signIn };
