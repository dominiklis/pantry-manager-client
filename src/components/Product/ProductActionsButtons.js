import { Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme, useIsSmallScreen } from "hooks";
import React from "react";
import { IoBagAddOutline, IoPencil, IoTrash } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToast, deleteProduct } from "store/actions";
import styles from "./ProductActionsButtons.module.css";

const componentName = "ProductActionsButtons";

const ProductActionsButtons = ({ productId, setSelectedAction }) => {
  const darkTheme = useIsDarkTheme();

  const isSmallScreen = useIsSmallScreen();

  const getListStyles = () => {
    if (isSmallScreen) return styles.list;

    return styles.actionButtons;
  };

  const dispatch = useDispatch();

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    await dispatch(deleteProduct(productId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "deleteToast",
        },
      })
    );
  };

  return (
    <ul className={getListStyles()}>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <form onSubmit={handleDeleteButton}>
          <Button
            type="submit"
            icon={<IoTrash />}
            backgroundColor={isSmallScreen ? componentColors.transparent : null}
            size={componentSizes.small}
          >
            <Translate section={componentName} text="deleteButtonText" />
          </Button>
        </form>
      </li>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <Button
          type="button"
          icon={<IoPencil />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(0)}
        >
          <Translate section={componentName} text="editButtonText" />
        </Button>
      </li>
      <li className={styles.listItem} data-dark-theme={darkTheme}>
        <Button
          type="button"
          icon={<IoBagAddOutline />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(1)}
        >
          <Translate section={componentName} text="addToListButtonText" />
        </Button>
      </li>
    </ul>
  );
};

export default ProductActionsButtons;
