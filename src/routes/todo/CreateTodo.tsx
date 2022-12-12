import React from "react";
import { Container } from "../../components/common";
import { TodoForm } from "../../components/todos";

const CreateTodo = () => {
  return (
    <Container display="flex">
      <TodoForm />
    </Container>
  );
};

export default CreateTodo;
