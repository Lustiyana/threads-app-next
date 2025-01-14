import { instance } from "../axios";
import { getAllThreads, postCreateThread } from "../path";

export const threadsService = () => {
  return instance({
    url: getAllThreads,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const postThreadService = (data) => {
  return instance({
    url: postCreateThread,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const getDetailService = (id) => {
  return instance({
    url: `${getAllThreads}/${id}`,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
