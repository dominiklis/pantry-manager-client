import { Button, Translate } from "components";
import { ShareForm, UsersWithAccessListItem, useShare } from "components/Share";
import { componentColors } from "constantStrings";
import React from "react";
import { IoRefresh } from "react-icons/io5";
import styles from "./Share.module.css";

const componentName = "Share";

const Share = ({ isShoppingList, id, ownerId, users }) => {
  const { storagesUsersLoading, listsUsersLoading, handleRefreshUsers } =
    useShare({ isShoppingList, id });

  return (
    <>
      <ShareForm
        isShoppingList={isShoppingList}
        id={id}
        ownerId={ownerId}
        users={users}
      />

      <div className={styles.users}>
        <p className={styles.usersTitle}>
          <Translate section={componentName} text="listTitleText" />
        </p>

        <Button
          loading={storagesUsersLoading || listsUsersLoading}
          iconButton
          icon={<IoRefresh />}
          backgroundColor={componentColors.transparent}
          onClick={handleRefreshUsers}
        ></Button>
      </div>

      <ul>
        {users.map((user) => (
          <UsersWithAccessListItem
            key={user.userId}
            isShoppingList={isShoppingList}
            id={id}
            userId={user.userId}
            userName={user.userName}
            canShare={user.canShare}
            ownerId={ownerId}
          />
        ))}
      </ul>
    </>
  );
};

export default Share;
