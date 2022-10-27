import { Button, Dropdown, Input, Label, Translate } from "components";
import { ColorButton } from "components/StorageForm";
import {
  componentColors,
  componentSizes,
  storageColors,
} from "constantStrings";
import React from "react";
import { validateInput } from "utils";
import styles from "./StorageForm.module.css";

const componentName = "StorageForm";

const StorageForm = ({
  onSubmit,
  input,
  setInput,
  errors,
  setErrors,
  loading,
  submitButtonText,
}) => {
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const err = validateInput(
      e.target.name,
      e.target.value,
      e.target.name === "numberOfDaysForWarning"
    );

    setErrors((prev) => ({ ...prev, [e.target.name]: err }));
  };

  const handleStorageColorChange = (color) =>
    setInput((prev) => ({ ...prev, color }));

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        type="text"
        name="storageName"
        label={<Translate section={componentName} text="nameInputLabel" />}
        onChange={handleChange}
        value={input.storageName}
        error={errors.storageName}
        autoFocus
      />

      <div className={styles.daysAndColor}>
        <Input
          type="text"
          name="numberOfDaysForWarning"
          label={<Translate section={componentName} text="daysLabel" />}
          onChange={handleChange}
          value={input.numberOfDaysForWarning}
          error={errors.numberOfDaysForWarning}
          className={styles.numberOfDaysForWarning}
        />

        <div className={styles.storageColor}>
          <Label className={styles.label}>
            <Translate section={componentName} text="storageColorLabel" />
          </Label>
          <Dropdown
            forceShiftingToTheRight
            className={styles.selectColor}
            hideOnClick
            dropdownButton={<ColorButton color={input.color} />}
            dropdownContent={
              <div className={styles.colorButtonsWrapper}>
                <ColorButton
                  color={storageColors.white}
                  onClick={() => {
                    handleStorageColorChange(storageColors.white);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.red}
                  onClick={() => {
                    handleStorageColorChange(storageColors.red);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.pink}
                  onClick={() => {
                    handleStorageColorChange(storageColors.pink);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.purple}
                  onClick={() => {
                    handleStorageColorChange(storageColors.purple);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.deepPurple}
                  onClick={() => {
                    handleStorageColorChange(storageColors.deepPurple);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.indigo}
                  onClick={() => {
                    handleStorageColorChange(storageColors.indigo);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.blue}
                  onClick={() => {
                    handleStorageColorChange(storageColors.blue);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.lightBlue}
                  onClick={() => {
                    handleStorageColorChange(storageColors.lightBlue);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.cyan}
                  onClick={() => {
                    handleStorageColorChange(storageColors.cyan);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.teal}
                  onClick={() => {
                    handleStorageColorChange(storageColors.teal);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.green}
                  onClick={() => {
                    handleStorageColorChange(storageColors.green);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.lightGreen}
                  onClick={() => {
                    handleStorageColorChange(storageColors.lightGreen);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.lime}
                  onClick={() => {
                    handleStorageColorChange(storageColors.lime);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.yellow}
                  onClick={() => {
                    handleStorageColorChange(storageColors.yellow);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.amber}
                  onClick={() => {
                    handleStorageColorChange(storageColors.amber);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.orange}
                  onClick={() => {
                    handleStorageColorChange(storageColors.orange);
                  }}
                  size={componentSizes.small}
                />
                <ColorButton
                  color={storageColors.deepOrange}
                  onClick={() => {
                    handleStorageColorChange(storageColors.deepOrange);
                  }}
                  size={componentSizes.small}
                />
              </div>
            }
          />
        </div>
      </div>

      {/* <div>
        <Label sublabel className={styles.label}>
          <Translate section={componentName} text="colorsToChooseLabel" />
        </Label>
      </div> */}

      <div className={styles.submitButtonWrapper}>
        <Button
          backgroundColor={componentColors.primary}
          disabled={!input.storageName || errors.storageName}
          loading={loading}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default StorageForm;
