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

const router = createBrowserRouter(createRoutesFromElements(App));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);

reportWebVitals();
