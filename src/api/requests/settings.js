import requests from "../axios";

const settings = {
  get: (userId) => requests.get(`/settings/${userId}`),
  edit: (userId, defaultNumberOfDaysForWarning, language, theme) =>
    requests.put(`/settings/${userId}`, {
      defaultNumberOfDaysForWarning,
      language,
      theme,
    }),
};

export default settings;
