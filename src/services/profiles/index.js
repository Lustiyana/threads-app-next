import { instance } from "../axios";
import { getAllUsers, getOwnProfile } from "../path";

export const getProfileService = () => {
  return instance({
    url: getOwnProfile,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const getAllProfileService = () => {
  return instance({
    url: getAllUsers,
    method: "GET",
    
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
