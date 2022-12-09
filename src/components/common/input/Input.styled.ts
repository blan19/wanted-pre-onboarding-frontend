import styled from "styled-components";

const Input = styled.input`
  all: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  padding: 10px 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid #eaeaec;
  border-radius: 4px;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    box-shadow: 0 0 0 1000px white inset;
  }
  &::placeholder {
    color: #8e8e95;
  }
  &:invalid {
    border: 1px solid #ed7474;
  }
`;

export { Input };
