import { displayAs as displayAsValues } from "constantStrings";
import styles from "./ListAndGrid.module.css";
import { useIsDarkTheme } from "hooks";
import { useDispatch } from "react-redux";

const useListAndGrid = ({
  displayAs,
  setSortByDispatchAction,
  setDisplayAsDispatchAction,
}) => {
  const darkTheme = useIsDarkTheme();

  const dispatch = useDispatch();

  const handleSortByButton = () => {
    dispatch(setSortByDispatchAction());
  };

  const handleDisplayAsButton = () => {
    dispatch(setDisplayAsDispatchAction());
  };

  const getListStyles = () => {
    let res = styles.list;

    if (displayAs === displayAsValues.grid) res += ` ${styles.grid}`;

    return res;
  };

  return {
    handleSortByButton,
    handleDisplayAsButton,
    getListStyles,
    darkTheme,
  };
};

export default useListAndGrid;
