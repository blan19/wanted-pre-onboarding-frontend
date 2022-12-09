import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/auth">
        <Route path="signIn" />
        <Route path="signUp" />
      </Route>
      <Route path="/todos">
        <Route path=":todoId" />
      </Route>
    </Routes>
  );
};

export default App;
