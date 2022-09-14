import { Button, Label, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useUsersWithAccessListItem } from "pages/Storage";
import React from "react";
import { IoCheckmark, IoClose, IoPencil, IoTrash } from "react-icons/io5";
import styles from "./UsersWithAccessListItem.module.css";

const componentName = "UsersWithAccessListItem";

const UsersWithAccessListItem = ({
  storageId,
  ownerId,
  userName,
  canShare,
  userId,
}) => {
  const {
    canShareInput,
    handleSubmit,
    editing,
    handleDelete,
    loggedUserId,
    handleCheckboxChange,
    handleEditButton,
    handleCancelEditing,
    editAccessLoading,
    removeAccessLoading,
    darkTheme,
  } = useUsersWithAccessListItem({
    componentName,
    storageId,
    userId,
    canShare,
  });

  if (editing)
    return (
      <li className={styles.usersListItem} data-dark-theme={darkTheme}>
        <div className={styles.itemContent}>
          <span className={styles.userName}>{userName}</span>
          <form className={styles.checkbox} onSubmit={handleSubmit}>
            <Label>
              <Translate section={componentName} text="sharingLabel" />
            </Label>

            <input
              name="canShare"
              type="checkbox"
              checked={canShareInput}
              onChange={handleCheckboxChange}
            />

            <Button
              type="submit"
              icon={<IoCheckmark />}
              backgroundColor={componentColors.transparent}
              size={componentSizes.small}
              loading={editAccessLoading}
            >
              <Translate section={componentName} text="submitTextButton" />
            </Button>
          </form>
        </div>

        <div>
          <Button
            iconButton
            icon={<IoClose />}
            backgroundColor={componentColors.transparent}
            onClick={handleCancelEditing}
          />
        </div>
      </li>
    );

  return (
    <li className={styles.usersListItem} data-dark-theme={darkTheme}>
      <div className={styles.itemContent}>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.canShare}>
          <Translate section={componentName} text="canShareSpanText" />
          {canShare ? <IoCheckmark /> : <IoClose />}
        </span>
      </div>

      <div>
        {ownerId !== userId &&
        (ownerId === loggedUserId || userId === loggedUserId) ? (
          <Button
            iconButton
            icon={<IoTrash />}
            backgroundColor={componentColors.transparent}
            onClick={handleDelete}
            loading={removeAccessLoading}
          />
        ) : null}

        {ownerId === loggedUserId && userId !== loggedUserId ? (
          <Button
            iconButton
            icon={<IoPencil />}
            backgroundColor={componentColors.transparent}
            onClick={handleEditButton}
          />
        ) : null}
      </div>
    </li>
  );
};

export default UsersWithAccessListItem;
