// const axios = require("axios");
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.defaults.headers.common["Authorization"] = "my secret token";

// axios.interceptors.request.use((req) => {
//   console.log(req);
//   //   req.headers.common.authorization = "my secret token";
//   return req;
// });
// axios.interceptors.request.clear();

axios.interceptors.response.use(null, (ex) => {
  return ex;
});

// instance.interceptors.response.clear();

export default instance;
