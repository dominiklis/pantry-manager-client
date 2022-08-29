import requests from "../axios";
import validator from "validator";

export const users = {
  login: (login, password) => {
    let userName = "",
      email = "";

    if (validator.isEmail(login)) email = login;
    else userName = login;

    return requests.post("users/login", { userName, email, password });
  },
  register: (userName, email, password) =>
    requests.post("/users/register", { userName, email, password }),
  edit: (newUserName, newEmail, newPassword, currentPassword) =>
    requests.put("users", {
      newUserName,
      newEmail,
      newPassword,
      currentPassword,
    }),
  renew: () => requests.get("/users/renew"),
};

export default users;
