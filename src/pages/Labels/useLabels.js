import { LabelChip, ListAndGridItem } from "components";
import { displayAs as displayAsValues, createMenuTabs } from "constantStrings";
import { useScrollToElement } from "hooks";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  setCreateMenu,
  setLabelsDisplayLabelsAs,
  setLabelsSortLabelsBy,
} from "store/actions";
import { makeSelectLabelsDetails } from "store/selectors";

const useLabels = () => {
  const { hash } = useLocation();
  useScrollToElement();

  const { sortLabelsBy, displayLabelsAs } = useSelector(
    (state) => state.pages.labels
  );

  const dispatch = useDispatch();

  const selectLabels = useMemo(makeSelectLabelsDetails, []);
  const labels = useSelector((state) =>
    selectLabels(state, {
      sortBy: sortLabelsBy,
    })
  );

  const elements = useMemo(
    () =>
      labels.map((label) => (
        <ListAndGridItem id={label.labelId} key={label.labelId}>
          <LabelChip
            key={label.labelId}
            labelName={label.labelName}
            transparent={displayLabelsAs === displayAsValues.list}
            selected={label.labelId === hash.replace("#", "")}
          />
        </ListAndGridItem>
      )),
    [displayLabelsAs, hash, labels]
  );

  useEffect(() => {
    dispatch(
      setCreateMenu({
        selectedTab: createMenuTabs.createLabel,
      })
    );
  }, [dispatch]);

  return {
    sortLabelsBy,
    displayLabelsAs,
    setLabelsSortLabelsBy,
    setLabelsDisplayLabelsAs,
    elements,
  };
};

export default useLabels;
