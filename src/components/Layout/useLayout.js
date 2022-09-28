import { various } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideCreateOverlay,
  setUploadOverlay,
  showCreateOverlay,
} from "store/actions";

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

  const { isVisible: isUploadOverlayVisible } = useSelector(
    (state) => state.app.uploadOverlay
  );

  const handleShowCreateOverlay = () => dispatch(showCreateOverlay());
  const handleHideCreateOverlay = () => dispatch(hideCreateOverlay());

  const handleHideUploadOverlay = () =>
    dispatch(setUploadOverlay({ isVisible: false }));

  const createOverlayRef = useRef(null);
  const uploadOverlayRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= various.smallScreen) setHidden(true);
  }, []);

  return {
    user,
    darkTheme,
    hidden,
    handleHideMenu,
    handleOpenMenu,
    createOverlayRef,
    uploadOverlayRef,
    isCreateOverlayVisible,
    isUploadOverlayVisible,
    handleShowCreateOverlay,
    handleHideCreateOverlay,
    handleHideUploadOverlay,
  };
};

export default useLayout;
