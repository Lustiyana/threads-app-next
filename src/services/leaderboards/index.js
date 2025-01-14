import { instance } from "../axios";
import { getAllLeaderboards } from "../path";

export const leaderboardsService = () => {
  return instance({
    url: getAllLeaderboards,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
