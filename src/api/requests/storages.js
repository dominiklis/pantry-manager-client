import requests from "../axios";
import validator from "validator";

const storages = {
  get: () => requests.get("/storages"),
  create: (storageName, color) =>
    requests.post("/storages", { storageName, color }),
  edit: (storageId, storageName, color, numberOfDaysForWarning) =>
    requests.put(`/storages/${storageId}`, {
      storageName,
      color,
      numberOfDaysForWarning: numberOfDaysForWarning || null,
    }),
  delete: (storageId, deleteProducts) =>
    requests.delete(`/storages/${storageId}`, { deleteProducts }),

  getUsers: (storageId) => requests.get(`/storages/${storageId}/users`),
  share: (storageId, login, canShare) => {
    let userName = "",
      email = "";

    if (validator.isEmail(login)) email = login;
    else userName = login;

    return requests.post(`/storages/${storageId}/users`, {
      userName,
      email,
      canShare,
    });
  },
  editAccess: (storageId, userId, canShare) =>
    requests.put(`/storages/${storageId}/users/${userId}`, {
      canShare,
    }),
  deleteAccess: (storageId, userId) =>
    requests.delete(`/storages/${storageId}/users/${userId}`),
};

export default storages;
