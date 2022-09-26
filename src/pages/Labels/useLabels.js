import { LabelChip, ListAndGridItem } from "components";
import {
  sortByValues,
  displayAs as displayAsValues,
  createOverlay,
} from "constantStrings";
import { useScrollToElement } from "hooks";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCreateOverlay } from "store/actions";
import { makeSelectLabelsDetails } from "store/selectors";

const useLabels = () => {
  const { hash } = useLocation();
  useScrollToElement();

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [displayAs, setDisplayAs] = useState(displayAsValues.grid);

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createLabel,
      })
    );
  }, [dispatch]);

  return {
    sortBy,
    setSortBy,
    displayAs,
    setDisplayAs,
    elements,
  };
};

export default useLabels;
