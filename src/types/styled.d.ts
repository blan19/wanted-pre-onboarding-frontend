import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      "font-36": "36px";
      "font-24": "24px";
      "font-20": "20px";
      "font-16": "16px";
      "font-14": "14px";
    };
    fontWeight: {
      bold: 700;
      regular: 500;
      thin: 300;
    };
    color: {
      "greyScale-1": "#FFFFFF";
      "greyScale-2": "#F7F7F8";
      "greyScale-3": "#EAEAEC";
      "greyScale-4": "#C3C3C7";
      "greyScale-5": "#8E8E95";
      "greyScale-6": "#1E1E20";
      success: "#51cf66";
      system: "#ED7474";
      black: "#000";
      white: "#fff";
    };
  }
}
