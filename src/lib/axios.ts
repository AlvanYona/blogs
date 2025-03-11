import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tenderdock-us.backendless.app/api",
});
