import React from "react";
import { AuthForm } from "../../components/auth";
import { Container, Title } from "../../components/common";

const SignIn = () => {
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
      <Title textAlign="center">로그인</Title>
      <AuthForm type="signIn" />
    </Container>
  );
};

export default SignIn;
