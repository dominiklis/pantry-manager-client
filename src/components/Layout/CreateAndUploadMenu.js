import { CreateMenu, UploadMenu } from "components/Layout";
import { screenSizesModes } from "constantStrings";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenus } from "store/actions";

const CreateAndUploadMenu = ({ screenSize }) => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(hideMenus());
  };

  const { isVisible: isCreateMenuVisible } = useSelector(
    (state) => state.app.createMenu
  );

  const { isVisible: isUploadMenuVisible } = useSelector(
    (state) => state.app.uploadMenu
  );

  if (screenSize !== screenSizesModes.wide) {
    if (isCreateMenuVisible) {
      return <CreateMenu toggleMenu={toggleMenu} screenSize={screenSize} />;
    } else if (isUploadMenuVisible) {
      return <UploadMenu toggleMenu={toggleMenu} />;
    }
  } else if (
    screenSize === screenSizesModes.wide &&
    (isCreateMenuVisible || isUploadMenuVisible)
  ) {
    return isUploadMenuVisible ? (
      <UploadMenu
        toggleMenu={toggleMenu}
        isWideScreen={screenSize === screenSizesModes.wide}
      />
    ) : (
      <CreateMenu toggleMenu={toggleMenu} screenSize={screenSize} />
    );
  }

  return null;
};

export default CreateAndUploadMenu;
