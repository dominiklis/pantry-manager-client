import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { formatDate } from "utils";
import styles from "./UploadProductCard.module.css";

const componentName = "UploadProductCard";

const UploadProductCard = ({
  invalid,
  index,
  productName,
  amount,
  expirationDate,
  selected,
  setFiles,
  errors,
}) => {
  const isDarkTheme = useIsDarkTheme();

  const handleClick = () =>
    setFiles((prev) =>
      prev.map((product, ind) =>
        ind === index ? { ...product, selected: !product.selected } : product
      )
    );

  const getContainerStyles = () => {
    let res = styles.container;

    if (invalid) res += ` ${styles.invalid}`;

    return res;
  };

  return (
    <div
      className={getContainerStyles()}
      data-dark-theme={isDarkTheme}
      {...(!invalid && { onClick: handleClick })}
      onKeyDown={(e) => {
        if (e?.code === "Enter") handleClick();
      }}
      tabIndex="0"
    >
      {selected ? (
        <div className={styles.selectedIcon}>
          {invalid ? <IoClose /> : <IoCheckmark />}
        </div>
      ) : null}

      <div className={styles.value}>
        <span>{productName}</span>
      </div>

      {amount ? (
        <div className={styles.value}>
          <Translate section={componentName} text="amount" />
          <span className={styles.amountSpan}>{amount}</span>
        </div>
      ) : null}

      {expirationDate ? (
        <div className={styles.value}>
          <Translate section={componentName} text="expirationDate" />
          <span>{formatDate(expirationDate)}</span>
        </div>
      ) : null}

      {!errors ? null : (
        <ul className={styles.errorList}>
          {errors.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadProductCard;
