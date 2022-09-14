import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React, { createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Actions.module.css";
import actionStyles from "./actionTransition.module.css";
import { Action, useActions } from "components/Actions";

const Actions = ({
  initialValue,
  additionalButtonsBefore,
  additionalButtonsAfter,
  actions,
}) => {
  const { selectedAction, handleActionButton, handleCloseAction } = useActions({
    initialValue,
  });

  return (
    <div className={styles.container}>
      {additionalButtonsBefore}

      {actions.map(({ button: { icon, text } }, index) => (
        <Button
          key={index}
          icon={icon}
          size={componentSizes.small}
          onClick={() => handleActionButton(index)}
          backgroundColor={
            selectedAction === index ? componentColors.primary : null
          }
        >
          {text}
        </Button>
      ))}

      {additionalButtonsAfter}

      <div className={styles.actionsContainer}>
        <TransitionGroup>
          {actions.map(({ action: { header, component } }, index) => {
            if (selectedAction !== index) return null;

            const nodeRef = createRef(null);

            return (
              <CSSTransition
                key={index}
                timeout={200}
                classNames={actionStyles}
                nodeRef={nodeRef}
              >
                <Action
                  onClose={handleCloseAction}
                  header={header}
                  ref={nodeRef}
                >
                  {component}
                </Action>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Actions;
