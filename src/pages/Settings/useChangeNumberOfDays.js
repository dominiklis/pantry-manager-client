import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, updateSettings } from "store/actions";
import { validateInput } from "utils";

const useChangeNumberOfDays = ({ componentName }) => {
  const {
    user: { userId },
  } = useSelector((state) => state.users);

  const {
    defaultNumberOfDaysForWarning: currentDays,
    loading: { updateSettings: loading },
  } = useSelector((state) => state.app);

  const [value, setValue] = useState(currentDays);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);

    const err = validateInput(e.target.name, e.target.value);

    setError(err);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateSettings({ userId, days: value }));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "changesSavedToast",
        },
      })
    );
  };

  return { handleSubmit, handleChange, value, error, currentDays, loading };
};

export default useChangeNumberOfDays;
