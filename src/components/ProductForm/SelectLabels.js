import { Label, Translate } from "components";
import { LabelsList } from "components/Product";
import React from "react";
import { useSelector } from "react-redux";

const componentName = "SelectLabels";

const SelectLabels = ({ selectedLabels, onLabelButtonClick }) => {
  const { allIds: labelsIds } = useSelector((state) => state.labels);

  return (
    <div>
      <Label>
        <Translate section={componentName} text="labelsLabel" />
      </Label>

      {selectedLabels?.length ? (
        <>
          <Label sublabel>
            <Translate section={componentName} text="selectedLabelsLabel" />
          </Label>
          <LabelsList
            labels={selectedLabels}
            useButtons
            onButtonClick={onLabelButtonClick}
          />
        </>
      ) : null}

      <Label sublabel>
        <Translate section={componentName} text="labelsToSelectLabel" />
      </Label>

      <LabelsList
        labels={labelsIds.filter((id) => !selectedLabels?.includes(id))}
        useButtons
        onButtonClick={onLabelButtonClick}
      />
    </div>
  );
};

export default SelectLabels;
