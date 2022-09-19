import { Button } from "components";
import { componentColors, languages } from "constantStrings";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, updateSettings } from "store/actions";

const AppLanguage = ({ buttonSize }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const { language } = useSelector((state) => state.app);

  const setAppLanguage = (language) => {
    dispatch(setLanguage(language));

    if (user) {
      dispatch(updateSettings({ userId: user.userId, language }));
    }
  };

  const handleSetEnglish = () => setAppLanguage(languages.english);

  const handleSetPolish = () => setAppLanguage(languages.polish);

  return (
    <>
      <Button
        showBorder
        backgroundColor={
          language === languages.english ? componentColors.primary : ""
        }
        onClick={handleSetEnglish}
        size={buttonSize}
      >
        english
      </Button>
      <Button
        showBorder
        backgroundColor={
          language === languages.polish ? componentColors.primary : ""
        }
        onClick={handleSetPolish}
        size={buttonSize}
      >
        polski
      </Button>
    </>
  );
};

export default AppLanguage;
