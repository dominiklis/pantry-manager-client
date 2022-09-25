import { Button, ControlledActions } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { useActions } from "components/Actions";

const Actions = ({
  className,
  initialValue,
  additionalButtonsBefore,
  additionalButtonsAfter,
  actions = [],
  transparentButtonsBackground,
}) => {
  const {
    selectedAction,
    handleActionButton,
    handleCloseAction,
    getContainerStyles,
  } = useActions({
    initialValue,
    className,
  });

  return (
    <div className={getContainerStyles()}>
      {additionalButtonsBefore}

      {actions.map(({ button: { icon, text } }, index) => (
        <Button
          key={index}
          icon={icon}
          size={componentSizes.small}
          onClick={() => handleActionButton(index)}
          backgroundColor={
            selectedAction === index
              ? componentColors.primary
              : transparentButtonsBackground
              ? componentColors.transparent
              : null
          }
        >
          {text}
        </Button>
      ))}

      {additionalButtonsAfter}

      <ControlledActions
        className={className}
        selectedAction={selectedAction}
        onCloseAction={handleCloseAction}
        actions={actions.map(({ action }) => action)}
      />
    </div>
  );
};

export default Actions;
