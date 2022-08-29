import instance from "../axios";
import Response from "../Response";

const getResponse = (response) =>
  new Response(true, response.status, response.data);

const handleError = (error) => {
  if (error.response) {
    return new Response(false, error.response.status, {
      message: error.response.data.message,
    });
  } else if (error.request) {
    return error.request;
  }

  return new Response(false, 500, {
    message: "something went wrong, try again later",
  });
};

export const requests = {
  get: (url) => instance.get(url).then(getResponse).catch(handleError),
  post: (url, body) =>
    instance.post(url, body).then(getResponse).catch(handleError),
  put: (url, body) =>
    instance.put(url, body).then(getResponse).catch(handleError),
  delete: (url, params) =>
    instance.delete(url, { params }).then(getResponse).catch(handleError),
};
