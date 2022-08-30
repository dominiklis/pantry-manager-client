import { Translate } from "components";
import { toastColors } from "constantStrings";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "store/actions";
import styles from "./Toast.module.css";

const Toast = ({ toastId }) => {
  const { toasts } = useSelector((state) => state.app);
  const toast = toasts.find((t) => t.id === toastId);

  const dispatch = useDispatch();
  const handleRemoveToast = () => dispatch(removeToast(toastId));

  const getStyles = () => {
    let res = styles.container;

    if (toast.color === toastColors.error) res += ` ${styles.errorContainer}`;

    return res;
  };

  if (toast.translate) {
    return (
      <div className={getStyles()} onClick={handleRemoveToast}>
        <p>
          <Translate
            section={toast.translate.section}
            text={toast.translate.text}
            additionalText={toast.translate.additionalText}
          />
        </p>
      </div>
    );
  }

  return (
    <div className={getStyles()} onClick={handleRemoveToast}>
      <p>{toast.message}</p>
    </div>
  );
};

export default Toast;
