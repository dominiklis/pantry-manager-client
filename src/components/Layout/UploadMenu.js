import { Button, Translate } from "components";
import { Menu, UploadProductCard, useUploadMenu } from "components/Layout";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoSend } from "react-icons/io5";
import styles from "./UploadMenu.module.css";

const componentName = "UploadMenu";

const UploadMenu = ({ toggleMenu, isWideScreen }) => {
  const {
    products,
    setProducts,
    darkTheme,
    error,
    handleChange,
    handleSubmitProducts,
    loading,
  } = useUploadMenu({
    componentName,
    toggleMenu,
  });

  return (
    <Menu
      toggleMenu={toggleMenu}
      header={<Translate section={componentName} text="header" />}
      closeButton={isWideScreen}
    >
      <>
        <input
          type="file"
          onChange={handleChange}
          accept="text/csv, application/json"
        />
        <br />

        <p data-dark-theme={darkTheme} className={styles.error}>
          {error}
        </p>

        {products?.length ? (
          <>
            <div className={styles.headerContainer}>
              <h2 className={styles.header}>
                <Translate section={componentName} text="uploadedFilesHeader" />
              </h2>

              <form onSubmit={handleSubmitProducts}>
                <Button
                  type="submit"
                  icon={<IoSend />}
                  backgroundColor={componentColors.primary}
                  size={componentSizes.small}
                  loading={loading}
                >
                  <Translate section={componentName} text="uploadButton" />
                </Button>
              </form>
            </div>
            <div className={styles.productsContainer}>
              {products.map((product, index) => (
                <UploadProductCard
                  key={index}
                  index={index}
                  {...product}
                  setFiles={setProducts}
                />
              ))}
            </div>
          </>
        ) : null}
      </>
    </Menu>
  );
};

export default UploadMenu;
