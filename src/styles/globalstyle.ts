import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2'), url('/font/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2'), url('/font/Pretendard-Regular.woff') format('woff');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Thin.woff2') format('woff2'), url('/font/Pretendard-Thin.woff') format('woff');
    font-weight: 300;
    font-display: swap;
  }

  * {
    font-family: 'Pretendard';
    box-sizing: "border-box";
  }

  a {
    all: unset;
  }

  input {
    all: unset;
  }
`;

export default GlobalStyle;
