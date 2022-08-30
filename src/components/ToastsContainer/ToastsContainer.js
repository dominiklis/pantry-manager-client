import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ToastsContainer.module.css";
import Toast from "./Toast";
import { removeToast } from "store/actions";

const showToastTime = 3000;
const toastsRoot = document.getElementById("toasts-root");

const ToastContainer = () => {
  const dispatch = useDispatch();

  const { toasts } = useSelector((state) => state.app);
  console.log(toasts);

  const [toastToRemove, setToastToRemove] = useState("");

  useEffect(() => {
    if (toasts.length) {
      const id = toasts[toasts.length - 1].id;

      setTimeout(() => {
        setToastToRemove(id);
      }, showToastTime);
    }
  }, [toasts]);

  useEffect(() => {
    dispatch(removeToast(toastToRemove));
  }, [toastToRemove]);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toastId={toast.id} />
      ))}
    </div>,
    toastsRoot
  );
};

export default ToastContainer;
