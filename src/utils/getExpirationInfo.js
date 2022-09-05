import {
  getDaysFromTodayText,
  getNumberOfDaysFromToday,
  getTranslatedText,
} from "utils";

const sectionName = "getExpirationInfo";

const getExpirationInfo = (language, expirationDate) => {
  if (getNumberOfDaysFromToday(expirationDate) > 0) {
    return `(${getTranslatedText(
      language,
      sectionName,
      "expired"
    )} ${getDaysFromTodayText(expirationDate, language)} ${getTranslatedText(
      language,
      sectionName,
      "ago"
    )})`;
  } else {
    return `(${getTranslatedText(
      language,
      sectionName,
      "expires"
    )} ${getDaysFromTodayText(expirationDate, language, true)})`;
  }
};

export default getExpirationInfo;
