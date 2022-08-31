import { Button } from "components";
import { componentColors, languages } from "constantStrings";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, updateSettings } from "store/actions";

const AppLanguage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const { language } = useSelector((state) => state.app);

  useEffect(() => {
    console.log(language);
  }, [language]);

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
      >
        english
      </Button>
      <Button
        showBorder
        backgroundColor={
          language === languages.polish ? componentColors.primary : ""
        }
        onClick={handleSetPolish}
      >
        polski
      </Button>
    </>
  );
};

export default AppLanguage;
