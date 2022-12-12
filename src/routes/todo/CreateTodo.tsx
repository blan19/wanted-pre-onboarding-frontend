import React from "react";
import { Button, Container, Input } from "../../components/common";

const CreateTodo = () => {
  return (
    <Container display="flex">
      <Input type="text" />
      <Button>등록</Button>
    </Container>
  );
};

export default CreateTodo;
