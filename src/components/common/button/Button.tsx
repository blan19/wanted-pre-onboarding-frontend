import { ButtonHTMLAttributes, Ref, useId } from "react";
import { forwardRef } from "react";
import * as Styled from "./Button.styled";

type Variant = "Line" | "Init";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  className?: string;
  prefixx?: string | JSX.Element;
  suffix?: JSX.Element;
  variant?: Variant;
  border?: "normal" | "rounded";
  type?: "submit" | "reset" | "button";
  width?: string | number;
  disabled?: boolean;
  active?: boolean;
}

const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {
    type,
    children,
    fullWidth,
    variant = "Line",
    border = "normal",
    className,
    disabled = false,
    style = {},
    active,
    prefixx,
    suffix,
    width = "100%",
    ...rest
  } = props;
  const buttonId = useId();
  return (
    <Styled.Button
      ref={ref}
      type={type}
      id={buttonId}
      aria-pressed={active}
      className={`button button-${border} button-${variant}`}
      disabled={disabled}
      style={{
        width,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};

export default forwardRef(Button);
