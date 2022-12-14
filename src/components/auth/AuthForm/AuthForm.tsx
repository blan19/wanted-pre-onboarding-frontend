import React, { HTMLInputTypeAttribute, useEffect, useMemo } from "react";
import useForm from "../../../hooks/useForm";
import useMedia from "../../../hooks/useMedia";
import AuthFormItem from "../AuthFormItem";
import useToast from "../../../hooks/useToast";
import { Button, Typography, Wrapper } from "../../common";
import { Form } from "./AuthSignUpForm.styled";
import { signIn, signUp } from "../../../utils/api/auth";
import { Link, useNavigate } from "react-router-dom";

import * as style from "./AuthSignUpForm.styled";

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
        <Wrapper css={style.wrapper}>
          <Typography
            as="span"
            color="greyScale-5"
            fontSize="font-14"
            fontWeight="thin"
          >
            {type === "signIn" ? "회원이 아니신가요?" : "이미 회원이신가요?"}
          </Typography>
          <Link to={type === "signIn" ? "/auth/signup" : "/auth/signin"}>
            <Button variant="Init" width="content-fit">
              <Typography
                as="span"
                fontSize="font-14"
                fontWeight="bold"
                color="greyScale-6"
              >
                {type === "signIn" ? "회원가입" : "로그인"}
              </Typography>
            </Button>
          </Link>
        </Wrapper>
        <Button type="submit" disabled={!abled}>
          {title}
        </Button>
      </Form>
      {toast}
    </>
  );
};

export default AuthForm;
