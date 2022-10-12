import { useDispatch } from "react-redux";

const useWarningContainer = ({
  styles,
  showContent,
  headerType,
  dispatchAction,
}) => {
  let iconStyles = styles.icon;
  if (!showContent) iconStyles += ` ${styles.rotated}`;

  let headerStyles = styles.header;
  if (headerType === "error") headerStyles += ` ${styles.errorHeader}`;
  if (headerType === "warning") headerStyles += ` ${styles.warningHeader}`;

  const dispatch = useDispatch();

  const handleHeaderClick = (isOpen = null) => {
    dispatch(dispatchAction(isOpen));
  };

  return { iconStyles, headerStyles, handleHeaderClick };
};

export default useWarningContainer;
