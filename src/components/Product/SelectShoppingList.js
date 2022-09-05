import { Label, Select } from "components";
import { useSelectShoppingList } from "components/Product";
import { various } from "constantStrings";
import React from "react";

import styles from "./SelectShoppingList.module.css";

const componentName = "SelectShoppingList";

const SelectShoppingList = ({ onChange, selectedShoppingList, label }) => {
  const { selectStorageOptions } = useSelectShoppingList({ componentName });

  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <Select
        options={selectStorageOptions}
        selectedValue={selectedShoppingList ?? various.noShoppingList}
        onChange={onChange}
        listStyles={styles.selectShoppingListList}
        buttonStyles={styles.buttonStyles}
      />
    </div>
  );
};

export default SelectShoppingList;
