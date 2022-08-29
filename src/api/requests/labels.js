import requests from "../axios";

const labels = {
  get: () => requests.get("/labels"),
  create: (labelName) => requests.post("/labels", { labelName }),
  edit: (labelId, labelName) =>
    requests.put(`/labels/${labelId}`, {
      labelName,
    }),
  delete: (labelId) => requests.delete(`/labels/${labelId}`),
};

export default labels;
