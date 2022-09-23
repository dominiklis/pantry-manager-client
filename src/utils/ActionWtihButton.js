import { Action } from "utils";

class ActionWtihButton {
  constructor(actionHeader, actionComponent, buttonText, buttonIcon) {
    this.action = new Action(actionHeader, actionComponent);
    this.button = {
      text: buttonText,
      icon: buttonIcon,
    };
  }
}

export default ActionWtihButton;
