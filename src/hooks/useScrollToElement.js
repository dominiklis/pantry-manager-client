import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = () => {
  const { hash } = useLocation();
  const id = hash?.replace("#", "");

  useLayoutEffect(() => {
    if (!id) window.scrollTo(0, 0);
    else {
      const element = document.getElementById(id);

      window.scrollTo({
        top: element?.offsetTop ?? 0,
      });
    }
  }, [id]);
};

export default useScrollToElement;
