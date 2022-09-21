import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useGetSearch = () => {
  let [searchParams] = useSearchParams();
  let [search] = useState(searchParams.get("q"));

  return search;
};

export default useGetSearch;
