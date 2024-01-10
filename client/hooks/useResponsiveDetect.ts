import { useState, useEffect } from "react";

const MOBILE = { max: 600 };
const TABLET = { min: 601, max: 960 };
const DESKTOP = { min: 1040 };
const BIGSCREEN = { min: 1400 };

export const isClientSide = () => typeof window !== "undefined";

export const getWindowWidth = () => {
  if (!isClientSide() || !document) {
    return 0;
  }
  if(document)
  {
    const e = document.documentElement;
    const g = document.getElementsByTagName("body")[0];
  
    return e.clientWidth || window.innerWidth || g.clientWidth;
  }


};

const getWindowDimensions = () => {
  return {
    width: getWindowWidth(),
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const useResponsiveDetect = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isBigScreen, setIsBigscreen] = useState(false);

  useEffect(() => {
    setIsMobile(width <= MOBILE.max);
    setIsTablet(width >= TABLET.min && width <= TABLET.max);
    setIsDesktop(width >= DESKTOP.min);
    setIsBigscreen(width >= BIGSCREEN.min);
  }, [width]);
  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
  };
};

export const useIsDeviceDetected = (type) => {
  const { width, isMobile, isTablet, isDesktop, isBigScreen } =
    useResponsiveDetect();
  const [device, setDevice] = useState(false);
  useEffect(() => {
    switch (type) {
      case "mobile":
        setDevice(isMobile);
        break;
      case "tablet":
        setDevice(isTablet);
        break;
      case "desktop":
        setDevice(isDesktop);
        break;
      case "bigScreen":
        setDevice(isBigScreen);
        break;
    }
  }, [width, type, isMobile, isTablet, isDesktop, isBigScreen]);
  return device;
};
