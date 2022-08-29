import { LoadingPage } from "components";
import { localStorageKeys } from "constantStrings";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const userToken = localStorage.getItem(localStorageKeys.userTokenKey);

  const { user, token } = useSelector((state) => state.users);
  const location = useLocation();

  if (!userToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else if (
    (!token || !user.userId || !user.email || !user.userName) &&
    userToken
  ) {
    return <LoadingPage />;
  }

  return children;
};

export default RequireAuth;
