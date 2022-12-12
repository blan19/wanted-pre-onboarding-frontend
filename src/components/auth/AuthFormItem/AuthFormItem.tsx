import React, { HTMLInputTypeAttribute, memo, useState } from "react";
import fieldValidator from "../../../utils/validator";
import { Container, Input, Typography, Wrapper } from "../../common";

type FormState = "email" | "password";

interface AuthFormItemProps {
  variant?: "Default" | "Label";
  htmlFor: FormState;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  tooltip?: string;
  wasSubmitted?: boolean;
  pattern?: string;
}

const AuthFormItem = memo(function AuthFormItem(props: AuthFormItemProps) {
  const {
    htmlFor,
    variant,
    label,
    type = "text",
    placeholder,
    tooltip,
    pattern,
    wasSubmitted,
  } = props;
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const errorMessage = fieldValidator[htmlFor](value);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  return (
    <Container display="flex" flexDirection="column" gap="6px">
      <Wrapper>
        <Typography
          as="label"
          htmlFor={htmlFor}
          fontSize="font-20"
          fontWeight="regular"
          lineHeight="150%"
          color="greyScale-6"
          style={{
            display: variant === "Label" ? "block" : "none",
            marginBottom: "4px",
          }}
        >
          {label}
        </Typography>
        <Input
          id={htmlFor}
          name={htmlFor}
          type={type}
          placeholder={placeholder}
          value={value}
          onBlur={() => setTouched(true)}
          onChange={(e) => setValue(e.currentTarget.value)}
          pattern={pattern}
          required
        />
      </Wrapper>
      <Wrapper>
        {tooltip && <Typography as="span">{tooltip}</Typography>}
        {displayErrorMessage ? (
          <Typography
            as="span"
            fontSize="font-14"
            fontWeight="thin"
            color="system"
            lineHeight="150%"
          >
            {errorMessage}
          </Typography>
        ) : null}
      </Wrapper>
    </Container>
  );
});

export default AuthFormItem;
