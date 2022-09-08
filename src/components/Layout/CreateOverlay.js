import { Button, Translate } from "components";
import {
  CreateLabel,
  CreateProduct,
  CreateShoppingList,
  CreateShoppingListItem,
  CreateStorage,
} from "components/Layout";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React, { useState } from "react";
import { IoAdd, IoChevronDown } from "react-icons/io5";
import styles from "./CreateOverlay.module.css";

const componentName = "CreateOverlay";

const CreateOverlay = React.forwardRef(({ onHideButtonClick }, ref) => {
  const darkTheme = useIsDarkTheme();

  const [tab, setTab] = useState(0);

  const handleButton = (tabIndex) => setTab(tabIndex);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.backdrop} onClick={onHideButtonClick} />

      <Button
        iconButton
        icon={<IoChevronDown />}
        size={componentSizes.large}
        backgroundColor={componentColors.secondary}
        onClick={onHideButtonClick}
        className={styles.closeButton}
      />

      <div className={styles.content} data-dark-theme={darkTheme}>
        <h1 className={styles.header}>
          <Translate section={componentName} text="header" />
        </h1>

        <div className={styles.navigation}>
          <Button
            icon={<IoAdd />}
            size={componentSizes.small}
            backgroundColor={tab === 0 ? componentColors.primary : null}
            onClick={() => handleButton(0)}
          >
            <Translate section={componentName} text="createProduct" />
          </Button>

          <Button
            icon={<IoAdd />}
            size={componentSizes.small}
            backgroundColor={tab === 1 ? componentColors.primary : null}
            onClick={() => handleButton(1)}
          >
            <Translate section={componentName} text="createStorage" />
          </Button>

          <Button
            icon={<IoAdd />}
            size={componentSizes.small}
            backgroundColor={tab === 2 ? componentColors.primary : null}
            onClick={() => handleButton(2)}
          >
            <Translate section={componentName} text="createLabel" />
          </Button>

          <Button
            icon={<IoAdd />}
            size={componentSizes.small}
            backgroundColor={tab === 3 ? componentColors.primary : null}
            onClick={() => handleButton(3)}
          >
            <Translate section={componentName} text="createShoppingList" />
          </Button>

          <Button
            icon={<IoAdd />}
            size={componentSizes.small}
            backgroundColor={tab === 4 ? componentColors.primary : null}
            onClick={() => handleButton(4)}
          >
            <Translate section={componentName} text="createShoppingListItem" />
          </Button>
        </div>

        <div className={`${styles.tab} ${tab === 0 ? styles.showTab : ""}`}>
          <h1 className={styles.tabHeader}>
            <Translate section={componentName} text="createProductHeader" />
          </h1>
          <CreateProduct />
        </div>
        <div className={`${styles.tab} ${tab === 1 ? styles.showTab : ""}`}>
          <h1 className={styles.tabHeader}>
            <Translate section={componentName} text="createStorageHeader" />
          </h1>
          <CreateStorage />
        </div>
        <div className={`${styles.tab} ${tab === 2 ? styles.showTab : ""}`}>
          <h1 className={styles.tabHeader}>
            <Translate section={componentName} text="createLabelHeader" />
          </h1>
          <CreateLabel />
        </div>
        <div className={`${styles.tab} ${tab === 3 ? styles.showTab : ""}`}>
          <h1 className={styles.tabHeader}>
            <Translate
              section={componentName}
              text="createShoppingListHeader"
            />
          </h1>
          <CreateShoppingList />
        </div>
        <div className={`${styles.tab} ${tab === 4 ? styles.showTab : ""}`}>
          <h1 className={styles.tabHeader}>
            <Translate
              section={componentName}
              text="createShoppingListItemHeader"
            />
          </h1>
          <CreateShoppingListItem />
        </div>
      </div>
    </div>
  );
});

export default CreateOverlay;
