import React from "react";
import { useTodos } from "../../../feature/TodoContext";

const List = () => {
  const { todos } = useTodos();
  console.log(todos);
  return (
    <div>
      <h1>{todos}</h1>
    </div>
  );
};

export default List;
