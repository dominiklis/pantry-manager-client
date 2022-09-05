const useWarningContainer = ({ styles, showContent, headerType }) => {
  let iconStyles = styles.icon;
  if (!showContent) iconStyles += ` ${styles.rotated}`;

  let headerStyles = styles.header;
  if (headerType === "error") headerStyles += ` ${styles.errorHeader}`;
  if (headerType === "warning") headerStyles += ` ${styles.warningHeader}`;
  if (!showContent) headerStyles += ` ${styles.noMarginBottom}`;

  return { iconStyles, headerStyles };
};

export default useWarningContainer;
