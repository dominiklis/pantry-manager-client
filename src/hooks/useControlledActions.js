import { useState } from "react";

const useControlledActions = () => {
  const [selectedAction, setSelectedAction] = useState(-1);
  const handleCloseAction = () => setSelectedAction(-1);

  return {
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useControlledActions;
