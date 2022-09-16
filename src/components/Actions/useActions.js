import { useState } from "react";
import styles from "./Actions.module.css";

const useActions = ({ className, initialValue }) => {
  const [selectedAction, setSelectedAction] = useState(initialValue ?? -1);

  const handleCloseAction = () => {
    setSelectedAction(-1);
  };

  const handleActionButton = (actionIndex) => {
    setSelectedAction(actionIndex);
  };

  const getContainerStyles = () => {
    let res = styles.container;

    if (className) res += ` ${className}`;

    return res;
  };

  return {
    selectedAction,
    handleActionButton,
    handleCloseAction,
    getContainerStyles,
  };
};

export default useActions;
