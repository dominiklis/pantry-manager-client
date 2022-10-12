import { ControlledAccordion } from "components";
import React, { useState } from "react";

const Accordion = ({
  children,
  id,
  actionsBeforeHeader,
  header,
  hideHeaderActionsOnClosed,
  smallScreenHeaderActions,
  initiallyOpen,
  open,
}) => {
  const [showContent, setShowContent] = useState(initiallyOpen ?? false);

  const handleHeaderClick = (isOpen = null) => {
    if (isOpen === null) setShowContent((prev) => !prev);
    else setShowContent(isOpen);
  };

  return (
    <ControlledAccordion
      showContent={showContent}
      onHeaderClick={handleHeaderClick}
      children={children}
      id={id}
      actionsBeforeHeader={actionsBeforeHeader}
      header={header}
      hideHeaderActionsOnClosed={hideHeaderActionsOnClosed}
      smallScreenHeaderActions={smallScreenHeaderActions}
      open={open}
    />
  );
};

export default Accordion;
