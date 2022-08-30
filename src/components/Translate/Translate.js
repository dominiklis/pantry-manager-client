import React from "react";
import { useSelector } from "react-redux";
import { getTranslatedText } from "utils";

const Translate = ({ section, text, additionalText }) => {
  const { language } = useSelector((state) => state.app);

  let translatedText = getTranslatedText(language, section, text);

  if (additionalText) translatedText += additionalText;

  return <>{translatedText}</>;
};

export default Translate;
