import React from "react";
import useForm from "../../../hooks/useForm";
import { Button, Input, Typography, Wrapper } from "../../common";
import { Form } from "./TodoForm.styled";
import * as style from "./TodoForm.styled";
import { useTodos } from "../../../feature/TodoContext";

const initialState = {
  todo: false,
};

const TodoForm = () => {
  const { createTodo } = useTodos();
  const { ref, handleSubmit } = useForm({
    initialState,
    callback: createTodo,
  });
  return (
    <Form ref={ref} onSubmit={handleSubmit}>
      <Wrapper css={style.wrapper}>
        <Typography as="label" htmlFor="todo" />
        <Input type="text" name="todo" id="todo" />
      </Wrapper>
      <Button width="120px" type="submit">
        등록
      </Button>
    </Form>
  );
};

export default TodoForm;
