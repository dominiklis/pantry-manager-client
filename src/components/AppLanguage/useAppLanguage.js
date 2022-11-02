import { languages } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, updateSettings } from "store/actions";

const useAppLanguage = () => {
  const isDarkTheme = useIsDarkTheme();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const { language } = useSelector((state) => state.app);

  const setAppLanguage = (lang) => {
    if (lang !== language) {
      dispatch(setLanguage(lang));

      if (user) {
        dispatch(updateSettings({ userId: user.userId, language: lang }));
      }
    }
  };

  const handleSetEnglish = () => setAppLanguage(languages.english);

  const handleSetPolish = () => setAppLanguage(languages.polish);

  return { isDarkTheme, language, handleSetEnglish, handleSetPolish };
};

export default useAppLanguage;
