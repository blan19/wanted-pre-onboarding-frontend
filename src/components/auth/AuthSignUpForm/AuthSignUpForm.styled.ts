import styled, { css } from "styled-components";
import DEVICE_LIST from "../../../constants/device";
import { applyMediaQuery } from "../../../styles/mediaQuery";

const responsiveWidth = {
  mobile: 350,
  tablet: 450,
  desktop: 800,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  ${css`
    ${DEVICE_LIST.map(
      (device) => `${applyMediaQuery(device)} {
    width: ${responsiveWidth[device]}px;
  }`
    ).join("")}
  `}
`;

export { Form };
