import { Button, Translate } from "components";
import {
  Overlay,
  UploadProductCard,
  useUploadOverlay,
} from "components/Layout";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoSend } from "react-icons/io5";
import styles from "./UploadOverlay.module.css";

const componentName = "UploadOverlay";

const UploadOverlay = React.forwardRef(({ onHideButtonClick }, ref) => {
  const {
    products,
    setProducts,
    darkTheme,
    error,
    handleChange,
    handleSubmitProducts,
    loading,
  } = useUploadOverlay({
    componentName,
    onHideButtonClick,
  });

  return (
    <Overlay
      header={<Translate section={componentName} text="header" />}
      onHideButtonClick={onHideButtonClick}
      ref={ref}
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
    </Overlay>
  );
});

export default UploadOverlay;
