import { useWindowSize } from "hooks";

const useIsMediumScreen = () => {
  const windowSize = useWindowSize();

  return windowSize.width > 800;
};

export default useIsMediumScreen;
