import { Label, Select } from "components";
import { useSelectStorage } from "components/ProductForm";
import { various } from "constantStrings";
import React from "react";
import styles from "./SelectStorage.module.css";

const componentName = "SelectStorage";

const SelectStorage = ({ onChange, selectedStorage, label }) => {
  const { selectStorageOptions } = useSelectStorage({ componentName });

  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <Select
        hideOnClick
        options={selectStorageOptions}
        selectedValue={selectedStorage ?? various.noStorage}
        onChange={onChange}
        listStyles={styles.selectStorageList}
        buttonStyles={styles.buttonStyles}
      />
    </div>
  );
};

export default SelectStorage;
