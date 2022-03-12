import axios from "axios";
import { API_URL } from "@env";

let instance = axios.create({
  baseURL: API_URL,
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
