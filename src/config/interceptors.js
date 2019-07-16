import axios from "axios";
import { ENV } from "./baseURL";

export default function(type) {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || ENV().api;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  // Add a request interceptor
  axios.interceptors.request.use(
    function(config) {
      switch (type) {
        //configurasi jwt
        case "jwt":
          var token = localStorage.getItem("secret_key");
          config.headers.common["Authorization"] = `Bearer ${token}`;
          return config;

        //configurasi digest
        case "digest":
          return config;

        //configurasi oauth
        case "Oauth2":
          return config;

        default:
          return config;
      }
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
}
