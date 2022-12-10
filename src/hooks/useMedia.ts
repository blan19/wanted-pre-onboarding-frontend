import { deviceQuery } from "../styles/mediaQuery";
import useMediaQuery from "./useMediaQuery";

export default function useMedia() {
  const isMobile = useMediaQuery(deviceQuery.mobile);
  const isTablet = useMediaQuery(deviceQuery.tablet);
  const isDestop = useMediaQuery(deviceQuery.desktop);

  return { isMobile, isTablet, isDestop };
}
