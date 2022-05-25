import axios from "../axiosInstance";

export function postUser(user) {
  return axios.post("/person", user);
}
