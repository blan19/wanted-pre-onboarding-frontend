import React, { HTMLInputTypeAttribute, useEffect, useMemo } from "react";
import useForm from "../../../hooks/useForm";
import useMedia from "../../../hooks/useMedia";
import AuthFormItem from "../AuthFormItem";
import useToast from "../../../hooks/useToast";
import { Button } from "../../common";
import { Form } from "./AuthSignUpForm.styled";
import { signIn, signUp } from "../../../utils/api/auth";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  type: "signIn" | "signUp";
}

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

const initialState = {
  email: false,
  password: false,
};

const AuthForm = ({ type }: AuthFormProps) => {
  const title = type === "signIn" ? "로그인" : "회원가입";
  const callback = type === "signIn" ? signIn : signUp;
  const { toast, fireToast } = useToast("system", 2000);
  const {
    ref,
    abled,
    wasSubmitted,
    success,
    error,
    handleSubmit,
    handleOnValid,
  } = useForm({
    initialState,
    callback,
  });
  const navigate = useNavigate();
  const { isDestop } = useMedia();
  const variant = useMemo(() => (isDestop ? "Label" : "Default"), [isDestop]);

  useEffect(() => {
    if (error) fireToast(`${title}에 실패했습니다.`);
    if (success) navigate("/");
  }, [error, success]);

  return (
    <>
      <Form ref={ref} noValidate onSubmit={handleSubmit}>
        {fields.map((field) => (
          <AuthFormItem
            key={field.htmlFor}
            wasSubmitted={wasSubmitted}
            variant={variant}
            handleOnValid={handleOnValid}
            {...field}
          />
        ))}
        <Button type="submit" disabled={!abled}>
          {title}
        </Button>
      </Form>
      {toast}
    </>
  );
};

export default AuthForm;
