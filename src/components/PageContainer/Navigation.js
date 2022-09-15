import { AppLink, StorageHeader, Translate } from "components";
import React, { useRef, useLayoutEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const componentName = "Navigation";

const Navigation = () => {
  const { byId: storages } = useSelector((state) => state.storages);

  const location = useLocation();

  const navigationRef = useRef();

  const createNavigation = () => {
    const link = location.pathname.split("/");
    // console.log(link);

    let navbar = [
      <AppLink to="/" color="white" key="home">
        <Translate section={componentName} text="myPantry" />
      </AppLink>,
    ];

    if (link[1] === "storages") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/storages" color="white" key="storages">
          <Translate section={componentName} text="storages" />
        </AppLink>
      );

      if (link?.[2]) {
        if (storages?.[link[2]]) {
          const { storageId, storageName, color } = storages?.[link[2]];

          navbar.push(
            <IoChevronForward key="chevron-2" />,
            <StorageHeader
              key={link[2]}
              storageId={storageId}
              storageName={storageName}
              storageColor={color}
            />
          );
        }
      }
    } else if (link[1] === "products") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/products" color="white" key="products">
          <Translate section={componentName} text="products" />
        </AppLink>
      );
    }

    return navbar;
  };

  useLayoutEffect(() => {
    if (navigationRef.current) {
      navigationRef.current.scrollLeft = navigationRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className={styles.container} ref={navigationRef}>
      {createNavigation()}
    </div>
  );
};

export default Navigation;
