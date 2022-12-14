import { Button } from "components";
import { useAppLanguage } from "components/AppLanguage";
import { componentColors, languages } from "constantStrings";
import React from "react";

const AppLanguage = ({ buttonSize }) => {
  const { isDarkTheme, language, handleSetEnglish, handleSetPolish } =
    useAppLanguage();

  return (
    <>
      <Button
        showBorder={!isDarkTheme}
        backgroundColor={
          language === languages.english ? componentColors.primary : ""
        }
        onClick={handleSetEnglish}
        size={buttonSize}
      >
        english
      </Button>
      <Button
        showBorder={!isDarkTheme}
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
