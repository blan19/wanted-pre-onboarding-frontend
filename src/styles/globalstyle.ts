import reset from "styled-reset";
import PretendardBoldWOFF2 from "../assets/fonts/Pretendard-Bold.woff2";
import PretendardBoldWOFF from "../assets/fonts/Pretendard-Bold.woff";
import PretendardRegularWOFF2 from "../assets/fonts/Pretendard-Regular.woff2";
import PretendardRegularWOFF from "../assets/fonts/Pretendard-Regular.woff";
import PretendardThinWOFF2 from "../assets/fonts/Pretendard-Thin.woff2";
import PretendardThinWOFF from "../assets/fonts/Pretendard-Thin.woff";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBoldWOFF2}) format('woff2'), url(${PretendardBoldWOFF}) format('woff');
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegularWOFF2}) format('woff2'), url(${PretendardRegularWOFF}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThinWOFF2}) format('woff2'), url(${PretendardThinWOFF}) format('woff');
    font-weight: 300;
    font-style: thin;
    font-display: swap;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard';
  }

  * {
    box-sizing: "border-box";
  }

  a {
    all: unset;
  }
`;

export default GlobalStyle;
