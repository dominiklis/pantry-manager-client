import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { CSVLink } from "react-csv";
import { IoDownload } from "react-icons/io5";
import linkStyles from "styles/links.module.css";
import buttonStyles from "styles/exportButtons.module.css";

const componentName = "ExportAsCSV";

const headers = [
  { label: "product id", key: "productId" },
  { label: "product name", key: "productName" },
  { label: "amount", key: "amount" },
  { label: "unit", key: "unit" },
  { label: "expiration date", key: "expirationDate" },
];

const ExportAsCSV = ({ products, filename, disabled }) => {
  const darkTheme = useIsDarkTheme();

  return (
    <button disabled={disabled} className={buttonStyles.button}>
      {disabled ? (
        <span className={buttonStyles.disabled} data-dark-theme={darkTheme}>
          <IoDownload />
          <Translate section={componentName} text="buttonText" />
        </span>
      ) : (
        <CSVLink
          className={`${linkStyles.link} ${linkStyles.white} ${buttonStyles.linkWrapper}`}
          data={products}
          headers={headers}
          filename={filename}
          disabled={disabled}
        >
          <IoDownload />
          <Translate section={componentName} text="buttonText" />
        </CSVLink>
      )}
    </button>
  );
};

export default ExportAsCSV;
