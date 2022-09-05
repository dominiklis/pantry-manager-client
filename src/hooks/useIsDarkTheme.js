import { themes } from "constantStrings";
import { useSelector } from "react-redux";

const useIsDarkTheme = () => {
  const { theme } = useSelector((state) => state.app);
  return theme === themes.dark;
};

export default useIsDarkTheme;
