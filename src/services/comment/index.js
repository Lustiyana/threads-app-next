import { instance } from "../axios";
import { postComment, postCreateThread } from "../path";

export const postCommentService = (id, data) => {
  instance({
    url: `${postCreateThread}/${id}${postComment}`,
    method: "POST",
    data: {
      content: data
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
