import { AuthPageContainer, Input, Translate } from "components";
import { toastColors } from "constantStrings";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToast,
  clearErrors,
  registerUser,
  setLabels,
  setProducts,
  setSettings,
  setShoppingListItems,
  setShoppingLists,
  setStorages,
} from "store/actions";
import { validateInput } from "utils";
import image from "../../images/undraw_my_password_re_ydq7.svg";

const componentName = "Register";

const Register = () => {
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state.users);
  const { register: loading } = useSelector((state) => state.users.loading);
  const { register: error } = useSelector((state) => state.users.errors);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: null,
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const validattionResults = validateInput(e.target.name, e.target.value);
    setErrors((prev) => ({ ...prev, [e.target.name]: validattionResults }));
  };

  const [showWelcomeToast, setShowWelcomToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowWelcomToast(true);
    const result = await dispatch(registerUser(input)).unwrap();

    if (result) {
      const { userId } = result;

      dispatch(setStorages([]));
      dispatch(setProducts([]));
      dispatch(setLabels([]));
      dispatch(setShoppingLists([]));
      dispatch(setShoppingListItems([]));
      dispatch(setSettings(userId));
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(
        addToast({
          color: toastColors.error,
          translate: {
            section: componentName,
            text: "error",
          },
        })
      );
      dispatch(clearErrors(["register"]));
    }
  }, [error]);

  useEffect(() => {
    if (token && user?.userId) {
      if (showWelcomeToast)
        dispatch(
          addToast({
            translate: {
              section: componentName,
              text: "weAreGlad",
              additionalText: user.userName,
            },
          })
        );

      navigate("/");
    }
  }, [token, user]);

  return (
    <AuthPageContainer
      disabled={
        !input.userName ||
        !input.email ||
        !input.password ||
        errors.userName ||
        errors.email ||
        errors.password
      }
      loading={loading}
      image={image}
      pageHeader={<Translate section={componentName} text="pageHeader" />}
      buttonText={<Translate section={componentName} text="buttonText" />}
      footerText={<Translate section={componentName} text="footer" />}
      linkText={<Translate section={componentName} text="link" />}
      handleSubmit={handleSubmit}
      link="/login"
    >
      <Input
        name="userName"
        label={<Translate section={componentName} text="username" />}
        value={input.userName}
        onChange={handleChange}
        error={errors.userName}
      />
      <Input
        name="email"
        label={<Translate section={componentName} text="email" />}
        value={input.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name="password"
        label={<Translate section={componentName} text="password" />}
        type="password"
        value={input.password}
        onChange={handleChange}
        error={errors.password}
      />
    </AuthPageContainer>
  );
};

export default Register;
