import { Button, Dropdown, Input, Label, Translate } from "components";
import { ColorButton } from "components/StorageForm";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { useSelector } from "react-redux";
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
  const { colors } = useSelector((state) => state.app);

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
                {colors.map((color) => (
                  <ColorButton
                    key={color}
                    color={color}
                    onClick={() => {
                      handleStorageColorChange(color);
                    }}
                    size={componentSizes.small}
                  />
                ))}
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
