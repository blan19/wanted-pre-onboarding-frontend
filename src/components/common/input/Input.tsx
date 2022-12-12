import { CSSProperties, InputHTMLAttributes, Ref } from "react";
import { forwardRef } from "react";
import * as Styled from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: CSSProperties["width"];
  className?: string;
  variant?: "Init" | "Default";
}

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  const {
    type,
    name,
    width = "100%",
    onInvalid,
    variant = "Default",
    className = "input",
    ...rest
  } = props;

  return (
    <Styled.Input
      ref={ref}
      name={name}
      type={type}
      className={`${className} input-${variant}`}
      onInvalid={onInvalid}
      style={{ width }}
      {...rest}
    />
  );
};

export default forwardRef(Input);
