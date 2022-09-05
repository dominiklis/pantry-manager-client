import { languages } from "constantStrings";
import { getNumberOfDaysFromToday, getTranslatedText } from "utils";

export const getDaysFromTodayText = (
  date,
  language = languages.english,
  useInMultipleDays
) => {
  const dates = Math.abs(getNumberOfDaysFromToday(date));

  if (dates === 0)
    return getTranslatedText(language, "getDaysFromTodayText", "today");

  if (!useInMultipleDays) return `${dates}d`;

  return `${getTranslatedText(
    language,
    "getDaysFromTodayText",
    "inMultipleDays"
  )}${dates}d`;
};

export default getDaysFromTodayText;
