import { useRef, useState } from "react";

const StorageActions = () => {
  const [selectedAction, setSelectedAction] = useState(-1);

  const handleCloseAction = () => {
    setSelectedAction(-1);
  };

  const handleActionButton = (actionIndex) => {
    setSelectedAction(actionIndex);
  };

  const shareNodeRef = useRef(null);
  const editNodeRef = useRef(null);
  const deleteNodeRef = useRef(null);

  return {
    selectedAction,
    handleCloseAction,
    handleActionButton,
    shareNodeRef,
    editNodeRef,
    deleteNodeRef,
  };
};

export default StorageActions;
