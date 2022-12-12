import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Title } from "../../components/common";
import { List } from "../../components/todos";
import { TodoProvider } from "../../feature/TodoContext";

const Todo = () => {
  return (
    <TodoProvider>
      <Container>
        <Title textAlign="center">투두 리스트</Title>
        <Outlet />
        <List />
      </Container>
    </TodoProvider>
  );
};

export default Todo;
