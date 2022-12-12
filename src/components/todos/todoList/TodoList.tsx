import React, { ChangeEvent, memo, useCallback, useRef, useState } from "react";
import { TodoType, useTodos } from "../../../feature/TodoContext";
import { Button, Container, Input, Typography, Wrapper } from "../../common";
import * as style from "./TodoList.styled";

interface TodoListItemProps extends TodoType {
  updateTodo: (value: Omit<TodoType, "userId">) => void;
  deleteTodo: (id: number) => void;
}

const TodoListItem = memo(function TodoListItem({
  todo,
  isCompleted,
  id,
  updateTodo,
  deleteTodo,
}: TodoListItemProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [update, setUpdate] = useState(false);
  const [checked, setChecked] = useState(isCompleted);

  const handleOnUpdateMode = useCallback(() => {
    if (ref.current) ref.current.focus();
    setUpdate(true);
  }, []);

  const handleOnUpdateModeCancel = useCallback(() => {
    if (ref.current) ref.current.value = todo;
    setUpdate(false);
  }, [todo]);

  const handleOnTodoComplete = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      updateTodo({ id, todo, isCompleted: e.target.checked });
    },
    [id, todo, updateTodo]
  );

  const handleOnTodoUpdate = useCallback(() => {
    if (ref.current) updateTodo({ id, todo: ref.current.value, isCompleted });
    setUpdate(false);
  }, [id, isCompleted, updateTodo]);

  const handleOnTodoDelete = useCallback(() => {
    deleteTodo(id);
  }, [deleteTodo, id]);
  return (
    <Container
      display="flex"
      border="1px solid #C3C3C7"
      borderRadius="4px"
      padding="10px"
      justifyContent="space-between"
    >
      <Wrapper css={style.inputWrapper}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleOnTodoComplete}
        />
        <Input
          ref={ref}
          variant="Init"
          defaultValue={todo}
          readOnly={!update}
          style={{
            textDecoration: checked ? "line-through" : "none",
          }}
        />
      </Wrapper>
      <Wrapper css={style.buttonWrapper}>
        {update ? (
          <>
            <Button variant="Init" onClick={handleOnTodoUpdate}>
              <Typography>등록</Typography>
            </Button>
            <Button variant="Init" onClick={handleOnUpdateModeCancel}>
              <Typography>취소</Typography>
            </Button>
          </>
        ) : (
          <>
            <Button variant="Init" onClick={handleOnUpdateMode}>
              <Typography>수정</Typography>
            </Button>
            <Button variant="Init" onClick={handleOnTodoDelete}>
              <Typography>삭제</Typography>
            </Button>
          </>
        )}
      </Wrapper>
    </Container>
  );
});

const TodoList = () => {
  const { todos, updateTodo, deleteTodo } = useTodos();
  return (
    <Container display="flex" flexDirection="column" gap="12px">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
    </Container>
  );
};

export default TodoList;
