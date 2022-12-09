import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import GlobalStyle from "./styles/globalstyle";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";

const router = createBrowserRouter(createRoutesFromElements(App));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CookiesProvider>
  </React.StrictMode>
);

reportWebVitals();
