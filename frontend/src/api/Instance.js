import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log(response);
    if (response.data.success) {
      return response.data.data;
    } else {
      return response.data.message;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
