import { LabelChip } from "components";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectLabelsDetails } from "store/selectors";
import styles from "./LabelsList.module.css";

const LabelsList = ({ labels, useButtons, onButtonClick }) => {
  const selectLabelsDetails = useMemo(makeSelectLabelsDetails, []);
  const labelsDetails = useSelector((state) =>
    selectLabelsDetails(state, { labelsIds: labels })
  );

  return (
    <div className={styles.container}>
      {labelsDetails?.map((label) => (
        <LabelChip
          key={label.labelId}
          labelName={label.labelName}
          useButton={useButtons}
          onClick={() => onButtonClick(label.labelId)}
        />
      ))}
    </div>
  );
};

export default LabelsList;
