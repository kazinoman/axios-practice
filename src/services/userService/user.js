import axios from "../axiosInstance";
import { useMutation } from "react-query";

function postData(data) {
  axios.post("/person", data);
}

export function postUser(user) {
  return axios.post("/person", user);
}

export const usePostPersonData = () => {
  return useMutation(postData);
};
