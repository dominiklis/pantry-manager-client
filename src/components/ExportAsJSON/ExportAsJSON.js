import React from "react";
import linkStyles from "styles/links.module.css";
import buttonStyles from "styles/exportButtons.module.css";
import { useIsDarkTheme } from "hooks";
import { Translate } from "components";
import { ProductJSON } from "components/ExportAsJSON";

const componentName = "ExportAsJSON";

const ExportAsJSON = ({ disabled, products, filename }) => {
  const darkTheme = useIsDarkTheme();

  const exportAsJSON = () => {
    if (products && products.length) {
      products = products.map(
        ({ productId, productName, amount, unit, expirationDate }) =>
          new ProductJSON(productId, productName, amount, unit, expirationDate)
      );

      const blob = new Blob([JSON.stringify(products)], { type: "text/json" });

      const a = document.createElement("a");
      a.download = `${filename}.json`;
      a.href = window.URL.createObjectURL(blob);
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      a.dispatchEvent(clickEvent);
      a.remove();
    }
  };

  return (
    <button
      disabled={disabled}
      className={buttonStyles.button}
      onClick={exportAsJSON}
    >
      <span
        className={
          disabled
            ? buttonStyles.disabled
            : `${linkStyles.link} ${linkStyles.white} ${buttonStyles.linkWrapper}`
        }
        data-dark-theme={darkTheme}
      >
        <Translate section={componentName} text="buttonText" />
      </span>
    </button>
  );
};

export default ExportAsJSON;
