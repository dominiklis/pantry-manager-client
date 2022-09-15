import { LabelChip, ListAndGridItem } from "components";
import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import { useScrollToElement } from "hooks";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { makeSelectLabelsDetails } from "store/selectors";

const useLabels = () => {
  const { hash } = useLocation();
  useScrollToElement(hash?.replace("#", ""));

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [displayAs, setDisplayAs] = useState(displayAsValues.list);

  const selectLabels = useMemo(makeSelectLabelsDetails, []);
  const labels = useSelector((state) =>
    selectLabels(state, {
      sortBy,
    })
  );

  const elements = useMemo(
    () =>
      labels.map((label) => (
        <ListAndGridItem id={label.labelId} key={label.labelId}>
          <LabelChip
            key={label.labelId}
            labelName={label.labelName}
            transparent={displayAs === displayAsValues.list}
            selected={label.labelId === hash.replace("#", "")}
          />
        </ListAndGridItem>
      )),
    [displayAs, hash, labels]
  );

  return {
    sortBy,
    setSortBy,
    displayAs,
    setDisplayAs,
    elements,
  };
};

export default useLabels;
