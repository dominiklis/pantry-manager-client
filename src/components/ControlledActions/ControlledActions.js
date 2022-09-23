import React, { createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ControlledActions.module.css";
import actionStyles from "./actionTransition.module.css";
import { Action } from "components/ControlledActions";

const ControlledActions = ({
  className,
  actions,
  selectedAction,
  onCloseAction,
}) => {
  const getContainerStyles = () => {
    let res = styles.container;

    if (className) res += ` ${className}`;

    return res;
  };

  return (
    <div className={getContainerStyles()}>
      <div className={styles.actionsContainer}>
        <TransitionGroup>
          {actions.map(({ header, component }, index) => {
            if (selectedAction !== index) return null;

            const nodeRef = createRef(null);

            return (
              <CSSTransition
                key={index}
                timeout={200}
                classNames={actionStyles}
                nodeRef={nodeRef}
              >
                <Action onClose={onCloseAction} header={header} ref={nodeRef}>
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

export default ControlledActions;
