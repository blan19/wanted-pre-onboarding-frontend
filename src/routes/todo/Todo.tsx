import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Title } from "../../components/common";
import { TodoList, Toggle } from "../../components/todos";

const Todo = () => {
  return (
    <Container display="flex" flexDirection="column" padding="20px" gap="40px">
      <Title textAlign="center">투두 리스트</Title>
      <Toggle />
      <Outlet />
      <TodoList />
    </Container>
  );
};

export default Todo;
