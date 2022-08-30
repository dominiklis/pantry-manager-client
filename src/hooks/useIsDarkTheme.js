import { themes } from "constantStrings";
import { useSelector } from "react-redux";

export const useIsDarkTheme = () => {
  const { theme } = useSelector((state) => state.app);
  return theme === themes.dark;
};
