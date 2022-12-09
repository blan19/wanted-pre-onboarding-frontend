import theme from "../../../constants/theme";
import type { AllHTMLAttributes, CSSProperties, ReactNode, Ref } from "react";
import { forwardRef } from "react";

type FontSize = keyof typeof theme.fontSize;

type FontWeight = keyof typeof theme.fontWeight;

type FontColor = keyof typeof theme.color;

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: FontColor;
  space?: boolean;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
}

type TypographyProps<Element extends keyof JSX.IntrinsicElements = "span"> =
  BaseProps & {
    as?: Element;
  } & Omit<AllHTMLAttributes<Element>, "as">;

const Typography = <Element extends keyof JSX.IntrinsicElements = "span">(
  props: TypographyProps<Element>,
  ref: Ref<HTMLElement>
) => {
  const {
    as: Component = "span",
    fontSize,
    fontWeight,
    lineHeight,
    display = "inline-block",
    textAlign,
    children,
    color,
    space = false,
    role,
    style,
    className,
  } = props as TypographyProps;
  return (
    <Component
      ref={ref}
      role={role ?? (Component === "span" ? "text" : undefined)}
      style={{
        color: color && theme.color[color],
        fontSize: fontSize && theme.fontSize[fontSize],
        fontWeight: fontWeight && theme.fontWeight[fontWeight],
        lineHeight,
        display,
        textAlign,
        whiteSpace: space ? "pre-wrap" : "normal",
        ...style,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default forwardRef(Typography);
