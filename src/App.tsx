import React from "react";
import { Route } from "react-router-dom";
import Root from "./routes/Root";
import SignIn from "./routes/auth/SignIn";
import SignUp from "./routes/auth/SignUp";
import Todo from "./routes/todo/Todo";
import CreateTodo from "./routes/todo/CreateTodo";

const App = (
  <Route path="/">
    <Route index element={<Root />} />
    <Route path="auth">
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
    <Route path="todo" element={<Todo />}>
      <Route path="create" element={<CreateTodo />} />
    </Route>
  </Route>
);

export default App;
