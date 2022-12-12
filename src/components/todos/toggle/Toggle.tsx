import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Button, Container, Typography } from "../../common";

const Toggle = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const createPage = location.pathname === "/todo/create";
  return (
    <Container
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      gap="24px"
    >
      <Button width="120px" onClick={() => logout()}>
        <Typography fontSize="font-16" fontWeight="bold" color="greyScale-6">
          로그아웃
        </Typography>
      </Button>
      <Button width="120px">
        <Link to={createPage ? "/todo" : "/todo/create"}>
          <Typography fontSize="font-16" fontWeight="bold" color="greyScale-6">
            {createPage ? "Cancel" : "Add"}
          </Typography>
        </Link>
      </Button>
    </Container>
  );
};

export default Toggle;
