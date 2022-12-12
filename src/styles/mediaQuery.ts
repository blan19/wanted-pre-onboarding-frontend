import { Device } from "../constants/device";

type DeviceQuery = {
  [key in Device]: string;
};

const deviceQuery: DeviceQuery = {
  mobile: "(max-width: 703px)",
  tablet: "(min-width: 704px) and (max-width: 895px)",
  desktop: "(min-width: 896px)",
};

const applyMediaQuery = (...deviceList: Device[]) =>
  "@media screen and " +
  deviceList.map((device) => deviceQuery[device]).join(",");

export { deviceQuery, applyMediaQuery };
