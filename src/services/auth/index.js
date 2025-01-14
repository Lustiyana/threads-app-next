import { instance } from "../axios";
import { postLoginPath, postRegisterPath } from "../path";

export const registerService = (data) =>
  instance({
    url: postRegisterPath,
    method: "POST",
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });


export const loginService = (data) =>
  instance({
    url: postLoginPath,
    method: "POST",
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
