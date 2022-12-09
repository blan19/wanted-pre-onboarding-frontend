import type { PropsWithChildren } from "react";
import type {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";

import { Container } from "./wrapper.styled";

interface WrapperProps {
  css?:
    | FlattenSimpleInterpolation
    | FlattenInterpolation<ThemeProps<DefaultTheme>>;
  className?: string;
}

const Wrapper = (props: PropsWithChildren<WrapperProps>) => {
  const { css, children, className = "wrapper" } = props;
  return (
    <Container css={css} className={className}>
      {children}
    </Container>
  );
};

Wrapper.Item = function Top(props: PropsWithChildren<WrapperProps>) {
  const { css, children, className = "wrapper-item" } = props;
  return (
    <Container css={css} className={className}>
      {children}
    </Container>
  );
};

export default Wrapper;
