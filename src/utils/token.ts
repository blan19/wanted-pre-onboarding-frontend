import { TOKEN } from "../constants/env";

const getToken = () => {
  return localStorage.getItem(TOKEN);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

const resetToken = () => {
  localStorage.removeItem(TOKEN);
};

export { getToken, setToken, resetToken };
