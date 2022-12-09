import { CSSProperties, InputHTMLAttributes, Ref } from "react";
import { forwardRef } from "react";
import * as Styled from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: CSSProperties["width"];
  className?: string;
}

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  const {
    type,
    name,
    width = "100%",
    onInvalid,
    className = "input",
    ...rest
  } = props;

  return (
    <Styled.Input
      ref={ref}
      name={name}
      type={type}
      className={className}
      onInvalid={onInvalid}
      style={{ width }}
      {...rest}
    />
  );
};

export default forwardRef(Input);
