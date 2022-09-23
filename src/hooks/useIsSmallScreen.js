import { various } from "constantStrings";
import { useWindowSize } from "hooks";

const useIsSmallScreen = () => {
  const windowSize = useWindowSize();

  return windowSize.width <= various.smallScreen;
};

export default useIsSmallScreen;
