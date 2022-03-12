import axios from "axios";

const TIMEOUT_ERROR_MESSAGE = "timeoutErrorMessage";

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = TIMEOUT_ERROR_MESSAGE;

let instance = axios.create({
  baseURL: process.env.REACT_APP_API_LINK_CEP,
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const http = instance;
