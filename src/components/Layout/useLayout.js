import { various } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideCreateOverlay, showCreateOverlay } from "store/actions";

const useLayout = () => {
  const darkTheme = useIsDarkTheme();
  const { user } = useSelector((state) => state.users);

  const [hidden, setHidden] = useState(false);
  const handleHideMenu = () => setHidden(true);
  const handleOpenMenu = () => setHidden(false);

  const dispatch = useDispatch();

  const { isVisible: isCreateOverlayVisible } = useSelector(
    (state) => state.app.createOverlay
  );
  const handleShowCreateOverlay = () => dispatch(showCreateOverlay());
  const handleHideCreateOverlay = () => dispatch(hideCreateOverlay());

  const overlayRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= various.smallScreen) setHidden(true);
  }, []);

  return {
    user,
    darkTheme,
    hidden,
    handleHideMenu,
    handleOpenMenu,
    overlayRef,
    isCreateOverlayVisible,
    handleShowCreateOverlay,
    handleHideCreateOverlay,
  };
};

export default useLayout;
