import React, { HTMLInputTypeAttribute, useMemo } from "react";
import useForm from "../../../hooks/useForm";
import useMedia from "../../../hooks/useMedia";
import { Button } from "../../common";
import AuthFormItem from "../AuthFormItem";
import { Form } from "./AuthSignUpForm.styled";

interface Fields {
  htmlFor: "email" | "password";
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const fields: Fields[] = [
  {
    htmlFor: "email",
    label: "이메일",
    type: "email",
    placeholder: "이메일을 입력해주세요.",
  },
  {
    htmlFor: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해주세요.",
  },
];

const AuthSignUpForm = () => {
  const { ref, wasSubmitted, handleSubmit } = useForm();
  const { isDestop } = useMedia();

  const variant = useMemo(() => (isDestop ? "Label" : "Default"), [isDestop]);

  return (
    <Form ref={ref} noValidate onSubmit={handleSubmit}>
      {fields.map((field) => (
        <AuthFormItem
          key={field.htmlFor}
          wasSubmitted={wasSubmitted}
          variant={variant}
          {...field}
        />
      ))}
      <Button type="submit">회원가입</Button>
    </Form>
  );
};

export default AuthSignUpForm;
