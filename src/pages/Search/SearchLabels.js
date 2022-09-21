import { LabelChip, Translate } from "components";
import { ItemsList } from "pages/Search";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectLabelsDetails } from "store/selectors";

const componentName = "SearchLabels";

const SearchLabels = () => {
  const { search } = useSelector((state) => state.app);

  const selectLabels = useMemo(makeSelectLabelsDetails, []);
  const labels = useSelector((state) => selectLabels(state, { search }));

  return (
    <ItemsList
      horizontalList
      header={<Translate section={componentName} text="header" />}
      items={labels.map((label) => (
        <li key={label.labelId}>
          <LabelChip key={label.labelId} labelName={label.labelName} />
        </li>
      ))}
    />
  );
};

export default SearchLabels;
