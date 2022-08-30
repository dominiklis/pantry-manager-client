import * as languages from "../languages";

const getTranslatedText = (language, section, text) => {
  return languages?.[language]?.[section]?.[text];
};

export default getTranslatedText;
