import type { CSSProperties, PropsWithChildren } from "react";
import Typography from "../typography";

interface TitleProps extends PropsWithChildren {
  textAlign?: CSSProperties["textAlign"];
  className?: string;
  marginTop?: CSSProperties["marginTop"];
  marginBottom?: CSSProperties["marginBottom"];
}

const Title = (props: TitleProps) => {
  const {
    textAlign,
    marginBottom,
    marginTop,
    className = "title",
    children,
  } = props;
  return (
    <Typography
      as="h1"
      fontSize="font-36"
      fontWeight="bold"
      color="greyScale-6"
      lineHeight="150%"
      textAlign={textAlign}
      className={className}
      style={{
        width: "100%",
        marginTop,
        marginBottom,
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
