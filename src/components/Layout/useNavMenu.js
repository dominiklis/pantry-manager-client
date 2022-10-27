import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import { useMemo } from "react";
import {
  IoAlbumsOutline,
  IoBookmarkOutline,
  IoClipboardOutline,
  IoFastFood,
  IoHomeOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logoutUser } from "store/actions";
import styles from "./NavMenu.module.css";

const useNavMenu = ({ componentName }) => {
  const darkTheme = useIsDarkTheme();

  let location = useLocation();

  const items = useMemo(() => {
    return [
      {
        path: "/",
        icon: <IoHomeOutline />,
        text: <Translate section={componentName} text="myPantry" />,
      },
      {
        path: "/products",
        icon: <IoFastFood />,
        text: <Translate section={componentName} text="products" />,
      },
      {
        path: "/storages",
        icon: <IoAlbumsOutline />,
        text: <Translate section={componentName} text="storages" />,
      },
      {
        path: "/labels",
        icon: <IoBookmarkOutline />,
        text: <Translate section={componentName} text="labels" />,
      },
      {
        path: "/lists",
        icon: <IoClipboardOutline />,
        text: <Translate section={componentName} text="shoppingLists" />,
      },
      {
        path: "/settings",
        icon: <IoSettingsSharp />,
        text: <Translate section={componentName} text="settings" />,
      },
    ];
  }, [componentName]);

  const getItemStyles = (path) => {
    let res = styles.sidebarItem;

    if (location.pathname.split("/")[1] === path?.split("/")[1]) {
      res += ` ${styles.sidebarItemSelected}`;
    }

    return res;
  };

  const dispatch = useDispatch();

  const handleLogout = async () => await dispatch(logoutUser());

  return { darkTheme, items, getItemStyles, handleLogout };
};

export default useNavMenu;
