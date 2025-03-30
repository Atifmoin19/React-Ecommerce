import { useWindowDimensions } from "./useWindowDimention";

interface IUseDeviceType {
  isDesktop: boolean;
  isMobile: boolean;
}

const useDeviceType = () => {
  const { width } = useWindowDimensions();

  let isDesktop = false,
    isMobile = false;

  if (width >= 768) {
    isDesktop = true;
  } else {
    isMobile = true;
  }

  return { isDesktop, isMobile };
};

export { useDeviceType };
export type { IUseDeviceType };
