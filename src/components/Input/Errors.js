import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./Errors.module.css";

const Errors = ({ error }) => {
  const darkTheme = useIsDarkTheme();

  if (Array.isArray(error)) {
    return (
      <>
        {error.map((err, index) => (
          <p key={index} className={styles.error} data-dark-theme={darkTheme}>
            {err}
          </p>
        ))}
      </>
    );
  }

  return (
    <p className={styles.error} data-dark-theme={darkTheme}>
      {error}
    </p>
  );
};

export default Errors;
