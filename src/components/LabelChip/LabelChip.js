import React from "react";
import styles from "./LabelChip.module.css";
import { AppLink } from "components";
import { IoBookmarkOutline } from "react-icons/io5";

const LabelChip = ({
  className,
  labelName,
  useButton,
  onClick,
  transparent,
  selected,
}) => {
  const getLabelStyles = () => {
    let res = styles.label;

    if (className) res += ` ${className}`;
    if (transparent) res += ` ${styles.transparent}`;
    if (selected) res += ` ${styles.selected}`;

    return res;
  };

  if (useButton)
    return (
      <button className={getLabelStyles()} onClick={onClick} type="button">
        <IoBookmarkOutline />
        {labelName}
      </button>
    );

  return (
    <AppLink to={`/labels/${labelName}`} className={getLabelStyles()}>
      <IoBookmarkOutline />
      {labelName}
    </AppLink>
  );
};

export default LabelChip;
