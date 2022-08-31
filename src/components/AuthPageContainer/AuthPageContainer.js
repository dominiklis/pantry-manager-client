import { AppLanguage, AppLink, Button, Translate } from "components";
import { authPagesImages, componentColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React, { useState } from "react";
import styles from "./AuthPageContainer.module.css";

const componentName = "AuthPageContainer";

const AuthPageContainer = ({
  children,
  disabled,
  image,
  handleSubmit,
  pageHeader,
  footerText,
  link,
  linkText,
  buttonText,
  loading,
}) => {
  const [pageImage] = useState(
    authPagesImages[Math.floor(Math.random() * authPagesImages.length)]
  );

  const darkTheme = useIsDarkTheme();

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img className={styles.columnImage} src={pageImage} alt="pantry" />
      </div>

      <div className={styles.rightColumn}>
        <h2 className={styles.appName} data-dark-theme={darkTheme}>
          Pantry Manager
        </h2>

        <img className={styles.image} src={image} alt="authenticate" />
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          data-dark-theme={darkTheme}
        >
          <h1 className={styles.header}>{pageHeader}</h1>
          {children}

          <Button
            type="submit"
            disabled={disabled}
            loading={loading}
            backgroundColor={componentColors.primary}
          >
            {buttonText}
          </Button>
        </form>

        <div className={styles.footer}>
          {footerText} <AppLink to={link}>{linkText}</AppLink>
          <div className={styles.language}>
            <Translate section={componentName} text="changeLanguage" />{" "}
            <AppLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPageContainer;
