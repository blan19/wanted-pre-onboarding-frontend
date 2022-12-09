import React from "react";
import { Route } from "react-router-dom";

const App = (
  <Route path="/">
    <Route path="auth">
      <Route path="signIn" />
      <Route path="signUp" />
    </Route>
    <Route path="todos">
      <Route path=":todoId" />
    </Route>
  </Route>
);

export default App;
