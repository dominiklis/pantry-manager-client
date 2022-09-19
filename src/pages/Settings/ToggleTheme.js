import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import { Switch, ToggleIcons } from "pages/Settings";
import React from "react";
import {
  IoMoon,
  IoMoonOutline,
  IoSunny,
  IoSunnyOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, updateSettings } from "store/actions";
import styles from "./ToggleTheme.module.css";

const componentName = "ToggleTheme";

const ToggleTheme = () => {
  const darkTheme = useIsDarkTheme();
  const { user } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      dispatch(
        updateSettings({
          userId: user.userId,
          theme: darkTheme ? "light" : "dark",
        })
      );
    }

    dispatch(toggleTheme());
  };

  return (
    <div className={styles.container}>
      <Translate section={componentName} text="lightTheme" />
      <form onSubmit={handleSubmit}>
        <button className={styles.button}>
          <ToggleIcons
            leftIcon={<IoSunny />}
            rightIcon={<IoSunnyOutline />}
            toTheRight={darkTheme}
          />
          <Switch toTheRight={darkTheme} />
          <ToggleIcons
            leftIcon={<IoMoonOutline />}
            rightIcon={<IoMoon />}
            toTheRight={darkTheme}
          />
        </button>
      </form>
      <Translate section={componentName} text="darkTheme" />
    </div>
  );
};

export default ToggleTheme;
