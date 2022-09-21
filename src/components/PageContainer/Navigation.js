import { AppLink, StorageHeader, Translate } from "components";
import React, { useRef, useLayoutEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styles from "./Navigation.module.css";

const componentName = "Navigation";

const Navigation = () => {
  const { byId: storages } = useSelector((state) => state.storages);

  const location = useLocation();
  const { labelName } = useParams();

  const navigationRef = useRef();

  const createNavigation = () => {
    const link = location.pathname.split("/");

    let navbar = [
      <AppLink to="/" key="home">
        <Translate section={componentName} text="myPantry" />
      </AppLink>,
    ];

    if (link[1] === "storages") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/storages" key="storages">
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
              color={color}
            />
          );
        }
      }
    } else if (link[1] === "products") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/products" key="products">
          <Translate section={componentName} text="products" />
        </AppLink>
      );
    } else if (link[1] === "labels") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/labels" key="labels">
          <Translate section={componentName} text="labels" />
        </AppLink>
      );

      if (link?.[2]) {
        navbar.push(
          <IoChevronForward key="chevron-2" />,
          <AppLink to={`/labels/${link[2]}`} key="labels-name">
            {labelName}
          </AppLink>
        );
      }
    } else if (link[1] === "lists") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/lists" key="lists">
          <Translate section={componentName} text="lists" />
        </AppLink>
      );
    } else if (link[1] === "settings") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/settings" key="settings">
          <Translate section={componentName} text="settings" />
        </AppLink>
      );
    } else if (link[1] === "search") {
      navbar.push(
        <IoChevronForward key="chevron-1" />,
        <AppLink to="/search" key="search">
          <Translate section={componentName} text="search" />
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
