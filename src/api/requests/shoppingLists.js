import { requests } from "../axios";
import validator from "validator";

const shoppingLists = {
  get: () => requests.get("/shopping-lists"),
  create: (shoppingListName) =>
    requests.post("/shopping-lists", { shoppingListName }),
  edit: (shoppingListId, shoppingListName) =>
    requests.put(`/shopping-lists/${shoppingListId}`, { shoppingListName }),
  delete: (shoppingListId, deleteItems = false) =>
    requests.delete(`/shopping-lists/${shoppingListId}`, { deleteItems }),

  getUsers: (shoppingListId) =>
    requests.get(`/shopping-lists/${shoppingListId}/users`),
  share: (shoppingListId, login, canShare) => {
    let userName = "",
      email = "";

    if (validator.isEmail(login)) email = login;
    else userName = login;

    return requests.post(`/shopping-lists/${shoppingListId}/users`, {
      userName,
      email,
      canShare,
    });
  },
  editAccess: (shoppingListId, userId, canShare) =>
    requests.put(`/shopping-lists/${shoppingListId}/users/${userId}`, {
      canShare,
    }),
  deleteAccess: (shoppingListId, userId) =>
    requests.delete(`/shopping-lists/${shoppingListId}/users/${userId}`),
};

export default shoppingLists;
