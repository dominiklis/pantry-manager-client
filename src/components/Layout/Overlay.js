import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import styles from "./Overlay.module.css";

const Overlay = React.forwardRef(
  ({ children, header, onHideButtonClick }, ref) => {
    const darkTheme = useIsDarkTheme();

    return (
      <div
        className={styles.container}
        ref={ref}
        onKeyDown={(e) => {
          if (e.code === "Escape") onHideButtonClick();
        }}
      >
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
          <h1 className={styles.header}>{header}</h1>

          {children}
        </div>
      </div>
    );
  }
);

export default Overlay;
