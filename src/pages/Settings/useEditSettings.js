import { toastColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, clearErrors, editUser } from "store/actions";
import { validateInput } from "utils";

const useEditSettings = ({ componentName }) => {
  const { user } = useSelector((state) => state.users);
  const { edit: loading } = useSelector((state) => state.users.loading);
  const { edit: error } = useSelector((state) => state.users.errors);

  const [input, setInput] = useState({
    newUserName: user.userName,
    newEmail: user.email,
    newPassword: "",
    currentPassword: "",
  });

  const [errors, setErrors] = useState({
    newUserName: null,
    newEmail: null,
    newPassword: null,
    currentPassword: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "errorToastText",
          },
          color: toastColors.error,
        })
      );
      dispatch(clearErrors(["edit"]));
    }
  }, [error]);

  const [userChanged, setUserChanged] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(editUser(input));

    if (!res.error) setUserChanged(true);
  };

  useEffect(() => {
    if (userChanged) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "userChangedToastText",
          },
        })
      );
      setUserChanged(false);
    }
  }, [userChanged]);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const validationResults = validateInput(
      e.target.name,
      e.target.value,
      e.target.name !== "currentPassword"
    );

    setErrors((prev) => ({ ...prev, [e.target.name]: validationResults }));
  };

  const darkTheme = useIsDarkTheme();

  return { handleSubmit, darkTheme, input, errors, handleChange, loading };
};

export default useEditSettings;
