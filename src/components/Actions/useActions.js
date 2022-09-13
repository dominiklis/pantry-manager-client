import { useState } from "react";

const useActions = () => {
  const [selectedAction, setSelectedAction] = useState(-1);

  const handleCloseAction = () => {
    setSelectedAction(-1);
  };

  const handleActionButton = (actionIndex) => {
    setSelectedAction(actionIndex);
  };

  return {
    selectedAction,
    handleActionButton,
    handleCloseAction,
  };
};

export default useActions;
