import { screenSizes } from "constantStrings";
import { useWindowSize } from "hooks";

const useIsWideScreen = () => {
  const windowSize = useWindowSize();

  return windowSize.width > screenSizes.smallScreenMaxWidth;
};

export default useIsWideScreen;
