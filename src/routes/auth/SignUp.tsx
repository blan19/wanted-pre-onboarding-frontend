import React from "react";
import { AuthForm } from "../../components/auth";
import { Container, Title } from "../../components/common";

const SignUp = () => {
  return (
    <Container
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="12px"
    >
      <Title textAlign="center">회원가입</Title>
      <AuthForm type="signUp" />
    </Container>
  );
};

export default SignUp;
