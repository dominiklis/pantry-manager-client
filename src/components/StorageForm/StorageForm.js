import { Button, Input, Label, Translate } from "components";
import { ColorButton } from "components/StorageForm";
import { componentColors, storageColors } from "constantStrings";
import { useAccordion } from "hooks";
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

  const { toggleShowContent, getContentStyles, closeAccordion } = useAccordion({
    initiallyOpen: false,
  });

  return (
    <form onSubmit={onSubmit}>
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
          <ColorButton color={input.color} onClick={toggleShowContent} />
        </div>
      </div>

      <div className={getContentStyles()}>
        <Label sublabel className={styles.label}>
          <Translate section={componentName} text="colorsToChooseLabel" />
        </Label>

        <div className={styles.colorButtonsWrapper}>
          <ColorButton
            color={storageColors.white}
            onClick={() => {
              handleStorageColorChange(storageColors.white);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.red}
            onClick={() => {
              handleStorageColorChange(storageColors.red);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.pink}
            onClick={() => {
              handleStorageColorChange(storageColors.pink);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.purple}
            onClick={() => {
              handleStorageColorChange(storageColors.purple);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.deepPurple}
            onClick={() => {
              handleStorageColorChange(storageColors.deepPurple);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.indigo}
            onClick={() => {
              handleStorageColorChange(storageColors.indigo);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.blue}
            onClick={() => {
              handleStorageColorChange(storageColors.blue);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.lightBlue}
            onClick={() => {
              handleStorageColorChange(storageColors.lightBlue);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.cyan}
            onClick={() => {
              handleStorageColorChange(storageColors.cyan);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.teal}
            onClick={() => {
              handleStorageColorChange(storageColors.teal);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.green}
            onClick={() => {
              handleStorageColorChange(storageColors.green);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.lightGreen}
            onClick={() => {
              handleStorageColorChange(storageColors.lightGreen);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.lime}
            onClick={() => {
              handleStorageColorChange(storageColors.lime);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.yellow}
            onClick={() => {
              handleStorageColorChange(storageColors.yellow);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.amber}
            onClick={() => {
              handleStorageColorChange(storageColors.amber);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.orange}
            onClick={() => {
              handleStorageColorChange(storageColors.orange);
              closeAccordion();
            }}
          />
          <ColorButton
            color={storageColors.deepOrange}
            onClick={() => {
              handleStorageColorChange(storageColors.deepOrange);
              closeAccordion();
            }}
          />
        </div>
      </div>

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
