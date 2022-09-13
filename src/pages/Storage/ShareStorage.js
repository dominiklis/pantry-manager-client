import { Button, Input, Label, Translate } from "components";
import { componentColors, toastColors } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React, { useState } from "react";
import {
  IoCheckmark,
  IoClose,
  IoPencil,
  IoRefresh,
  IoTrash,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addToast,
  getStorageUsers,
  removeStorageAccess,
  shareStorage,
} from "store/actions";
import { validateInput } from "utils";
import styles from "./ShareStorage.module.css";

const componentName = "ShareStorage";

const ShareStorage = ({ storageId, ownerId, users }) => {
  const darkTheme = useIsDarkTheme();

  const { share: loading } = useSelector((state) => state.storages.loading);
  const { userId } = useSelector((state) => state.users.user);
  const { getUsers: getUsersLoading, editAccess: editAccessLoading } =
    useSelector((state) => state.storages.loading);

  const [input, setInput] = useState({
    login: "",
    canShare: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (e.target.name === "login") {
      const userAlreadyHasAnAccess =
        users.filter(
          (user) =>
            user.email === e.target.value || user.userName === e.target.value
        ).length > 0;

      if (userAlreadyHasAnAccess)
        setError(<Translate section={componentName} text="error" />);
      else {
        const validattionResult = validateInput("login", e.target.value);
        if (validattionResult) setError(validattionResult);
        else setError("");
      }
    }
  };

  const handleCheckboxChange = (e) => {
    handleChange({
      target: {
        name: e.target.name,
        value: e.target.checked,
      },
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(shareStorage({ storageId, ...input }));

    if (!result.error) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "successToast",
          },
        })
      );
      setInput({
        login: "",
        canShare: false,
      });
    } else {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "error",
          },
          color: toastColors.error,
        })
      );
    }
  };

  const handleRefreshUsers = async () => {
    await dispatch(getStorageUsers(storageId));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.shareInput}>
          <Input
            type="text"
            name="login"
            label={<Translate section={componentName} text="loginInputLabel" />}
            value={input.login}
            onChange={handleChange}
            error={error}
            autoFocus
            className={styles.input}
          />

          {ownerId === userId ? (
            <div className={styles.checkbox}>
              <Label>
                <Translate section={componentName} text="sharingLabel" />
              </Label>

              <input
                name="canShare"
                type="checkbox"
                checked={input.canShare}
                onChange={handleCheckboxChange}
              />
            </div>
          ) : null}

          <Button
            loading={loading}
            disabled={!input.login || error}
            backgroundColor={componentColors.primary}
            type="submit"
          >
            <Translate section={componentName} text="submitButtonText" />
          </Button>
        </div>
      </form>

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
          <li
            key={user.userId}
            className={styles.usersListItem}
            data-dark-theme={darkTheme}
          >
            <div className={styles.itemContent}>
              <span className={styles.userName}>{user.userName}</span>
              <span className={styles.canShare}>
                <Translate section={componentName} text="canShareSpanText" />
                {user.canShare ? <IoCheckmark /> : <IoClose />}
              </span>
            </div>
            <div>
              <Button
                iconButton
                icon={<IoPencil />}
                backgroundColor={componentColors.transparent}
              />
              <Button
                iconButton
                icon={<IoTrash />}
                backgroundColor={componentColors.transparent}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShareStorage;
