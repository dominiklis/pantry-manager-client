import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenus, hideUploadMenu, showCreateMenu } from "store/actions";
import { useIsDarkTheme } from "hooks";
import { screenSizes, screenSizesModes, various } from "constantStrings";

const useLayout = () => {
  const isDarkTheme = useIsDarkTheme();
  const { user } = useSelector((state) => state.users);

  const [screenSize, setScreenSize] = useState(screenSizesModes.mobile);

  const handleResize = useCallback(() => {
    if (
      window.innerWidth <= screenSizes.mobileMaxWidth &&
      screenSize !== screenSizesModes.mobile
    ) {
      setScreenSize(screenSizesModes.mobile);
    } else if (
      window.innerWidth > screenSizes.mobileMaxWidth &&
      window.innerWidth <= screenSizes.smallScreenMaxWidth &&
      screenSize !== screenSizesModes.narrow
    ) {
      setScreenSize(screenSizesModes.narrow);
    } else if (
      window.innerWidth > screenSizes.smallScreenMaxWidth &&
      screenSize !== screenSizesModes.wide
    ) {
      setScreenSize(screenSizesModes.wide);
    }
  }, [screenSize]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const dispatch = useDispatch();

  const { isVisible: isCreateMenuVisible } = useSelector(
    (state) => state.app.createMenu
  );
  const { isVisible: isUploadMenuVisible } = useSelector(
    (state) => state.app.uploadMenu
  );

  const sideMenuRef = useRef(null);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const toggleSideMenu = () => {
    setShowSideMenu((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth <= various.smallScreen) setShowSideMenu(false);
  }, []);

  const createAndUploadMenuRef = useRef(null);
  const hideCreateAndUploadMenu = () => {
    dispatch(hideMenus());
  };

  const showCreateAndUploadMenu = () => {
    dispatch(showCreateMenu());
    dispatch(hideUploadMenu());
  };

  return {
    user,
    isDarkTheme,
    sideMenuRef,
    showSideMenu,
    screenSize,
    toggleSideMenu,
    createAndUploadMenuRef,
    isCreateMenuVisible,
    isUploadMenuVisible,
    hideCreateAndUploadMenu,
    showCreateAndUploadMenu,
  };
};

export default useLayout;
