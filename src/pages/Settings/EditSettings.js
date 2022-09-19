import { Button, Input, Translate } from "components";
import { componentColors } from "constantStrings";
import { useEditSettings } from "pages/Settings";
import React from "react";

const componentName = "EditSettings";

const EditSettings = () => {
  const { handleSubmit, darkTheme, input, errors, handleChange, loading } =
    useEditSettings({ componentName });

  return (
    <form onSubmit={handleSubmit} data-dark-theme={darkTheme}>
      <Input
        label={<Translate section={componentName} text="usernameInputLabel" />}
        type="text"
        name="newUserName"
        value={input.newUserName}
        error={errors.newUserName}
        onChange={handleChange}
      />

      <Input
        label={<Translate section={componentName} text="emailInputLabel" />}
        type="email"
        name="newEmail"
        value={input.newEmail}
        error={errors.newEmail}
        onChange={handleChange}
      />

      <Input
        label={
          <Translate section={componentName} text="newPasswordInputLabel" />
        }
        type="password"
        name="newPassword"
        value={input.newPassword}
        error={errors.newPassword}
        onChange={handleChange}
      />

      <Input
        label={
          <Translate section={componentName} text="currentPasswordInputLabel" />
        }
        type="password"
        name="currentPassword"
        value={input.currentPassword}
        error={errors.currentPassword}
        onChange={handleChange}
      />

      <Button
        disabled={
          !input.currentPassword ||
          errors.currentPassword ||
          (!input.newUserName && !input.newEmail && !input.newPassword) ||
          errors.newUserName ||
          errors.newEmail ||
          errors.newPassword
        }
        backgroundColor={componentColors.primary}
        loading={loading}
      >
        <Translate section={componentName} text="submitButtonText" />
      </Button>
    </form>
  );
};

export default EditSettings;
