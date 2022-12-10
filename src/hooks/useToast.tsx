import { useState } from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../styles/mediaQuery";
import { debounce } from "../utils/misc";

type ToastType = "system" | "success";

function useToast(type: ToastType, delay?: number) {
  const [isVisible, setIsVisible] = useState(false);
  const [toastText, setToastText] = useState("");

  const wait = delay || 1500;

  const fireToast = (text: string) => {
    setIsVisible(true);
    setToastText(text);

    setTimeout(() => {
      setIsVisible(false);
    }, wait);
  };

  return {
    toast: isVisible ? <Toast type={type}>{toastText}</Toast> : null,
    fireToast: debounce(fireToast, 500),
  };
}

const Toast = styled.div<{ type: ToastType }>`
  position: fixed;
  bottom: 20px;
  z-index: 9999;
  width: fit-content;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: ${({ theme, type }) => theme.color[type]};
  box-shadow: 3px 3px 5px 3px lightgray;
  font-size: ${({ theme }) => theme.fontSize["font-24"]};
  color: white;
  animation: appearFromBottom ease-in-out 0.5s;
  ${applyMediaQuery("tablet", "mobile")} {
    font-size: ${({ theme }) => theme.fontSize["font-20"]};
  }
  @keyframes appearFromBottom {
    from {
      transform: translate(-50%, 50%);
    }
    to {
      transform: translate(-50%, 0);
    }
  }
`;

export default useToast;
