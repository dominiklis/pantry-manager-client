class Action {
  constructor(actionHeader, actionComponent, buttonText, buttonIcon) {
    this.action = {
      header: actionHeader,
      component: actionComponent,
    };
    this.button = {
      text: buttonText,
      icon: buttonIcon,
    };
  }
}

export default Action;
