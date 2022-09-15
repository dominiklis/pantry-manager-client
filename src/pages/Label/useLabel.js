import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeSelectLabelsDetails } from "store/selectors";

const useLabel = () => {
  const { labelName } = useParams();

  const selectLabel = useMemo(makeSelectLabelsDetails, []);
  const label = useSelector((state) =>
    selectLabel(state, {
      labelName,
    })
  );

  return { label };
};

export default useLabel;
