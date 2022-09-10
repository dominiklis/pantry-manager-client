import { useLayoutEffect } from "react";

const useScrollToElement = (id) => {
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
