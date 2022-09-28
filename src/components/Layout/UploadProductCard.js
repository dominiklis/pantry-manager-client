import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { formatDate } from "utils";
import styles from "./UploadProductCard.module.css";

const componentName = "UploadProductCard";

const UploadProductCard = ({
  index,
  productName,
  amount,
  expirationDate,
  selected,
  setFiles,
}) => {
  const isDarkTheme = useIsDarkTheme();

  const handleClick = () =>
    setFiles((prev) =>
      prev.map((product, ind) =>
        ind === index ? { ...product, selected: !product.selected } : product
      )
    );

  return (
    <div
      className={styles.container}
      data-dark-theme={isDarkTheme}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e?.code === "Enter") handleClick();
      }}
      tabIndex="0"
    >
      {selected ? (
        <div className={styles.selectedIcon}>
          <IoCheckmark />
        </div>
      ) : null}

      <div className={styles.value}>
        <span>{productName}</span>
      </div>
      {amount ? (
        <div className={styles.value}>
          <Translate section={componentName} text="amount" />
          <span>{amount}</span>
        </div>
      ) : null}
      {expirationDate ? (
        <div className={styles.value}>
          <Translate section={componentName} text="expirationDate" />
          <span>{formatDate(expirationDate)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default UploadProductCard;
