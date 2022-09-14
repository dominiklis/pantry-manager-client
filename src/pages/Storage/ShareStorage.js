import { Button, Translate } from "components";
import { componentColors } from "constantStrings";
import {
  ShareForm,
  UsersWithAccessListItem,
  useShareStorage,
} from "pages/Storage";
import React from "react";
import { IoRefresh } from "react-icons/io5";
import styles from "./ShareStorage.module.css";

const componentName = "ShareStorage";

const ShareStorage = ({ storageId, ownerId, users }) => {
  const { getUsersLoading, handleRefreshUsers } = useShareStorage({
    storageId,
  });

  return (
    <>
      <ShareForm storageId={storageId} ownerId={ownerId} users={users} />

      <div className={styles.users}>
        <p className={styles.usersTitle}>
          <Translate section={componentName} text="listTitleText" />
        </p>

        <Button
          loading={getUsersLoading}
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
            storageId={storageId}
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

export default ShareStorage;
