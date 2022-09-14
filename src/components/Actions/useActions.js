import { useState } from "react";

const useActions = ({ initialValue }) => {
  const [selectedAction, setSelectedAction] = useState(initialValue ?? -1);

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
