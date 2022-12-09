import styled from "styled-components";

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize["font-16"]};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 150%;
  padding: 10px 22px;
  gap: 4px;
  cursor: pointer;

  &.button-normal {
    border-radius: 4px;
  }
  &.button-rounded {
    border-radius: 20px;
  }
  &.button-Line {
    color: ${({ theme }) => theme.color["greyScale-6"]};
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color["greyScale-4"]};
  }
  &.button-Line:hover {
    background-color: #eaeaec;
  }
  &.button-Init {
    all: unset;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export { Button };
