import { AuthPageContainer, Input, Translate } from "components";
import { toastColors } from "constantStrings";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToast,
  clearErrors,
  getLabels,
  getProducts,
  getShoppingListItems,
  getShoppingLists,
  getStorages,
  loginUser,
  setSettings,
} from "store/actions";
import { validateInput } from "utils";
import image from "../../images/undraw_secure_login_pdn4.svg";

const componentName = "Login";

const Login = () => {
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state.users);
  const { login: loading } = useSelector((state) => state.users.loading);
  const { login: error } = useSelector((state) => state.users.errors);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    login: null,
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
    const result = await dispatch(loginUser(input)).unwrap();

    if (result) {
      const { userId } = result;

      dispatch(getStorages());
      dispatch(getProducts());
      dispatch(getLabels());
      dispatch(getShoppingLists());
      dispatch(getShoppingListItems());
      dispatch(setSettings(userId));
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "error",
          },
          color: toastColors.error,
        })
      );
      dispatch(clearErrors(["login"]));
    }
  }, [error]);

  useEffect(() => {
    if (token && user?.userId) {
      if (showWelcomeToast)
        dispatch(
          addToast({
            translate: {
              section: componentName,
              text: "welcomeBack",
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
        !input.login || !input.password || errors.login || errors.password
      }
      loading={loading}
      image={image}
      handleSubmit={handleSubmit}
      pageHeader={<Translate section={componentName} text="pageHeader" />}
      buttonText={<Translate section={componentName} text="buttonText" />}
      footerText={<Translate section={componentName} text="footer" />}
      linkText={<Translate section={componentName} text="link" />}
      link="/register"
    >
      <Input
        label={<Translate section={componentName} text="loginInput" />}
        name="login"
        value={input.login}
        onChange={handleChange}
        error={errors.login}
      />
      <Input
        label={<Translate section={componentName} text="passwordInput" />}
        name="password"
        type="password"
        value={input.password}
        onChange={handleChange}
        error={errors.password}
      />
    </AuthPageContainer>
  );
};

export default Login;
