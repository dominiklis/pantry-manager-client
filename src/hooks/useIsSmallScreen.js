import { screenSizes } from "constantStrings";
import { useWindowSize } from "hooks";

const useIsSmallScreen = () => {
  const windowSize = useWindowSize();

  return windowSize.width <= screenSizes.mobileMaxWidth;
};

export default useIsSmallScreen;
