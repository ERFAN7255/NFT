import axios, { AxiosInstance } from "axios";

const apiRequest: AxiosInstance = axios.create({
  baseURL: "/api",
});

export default apiRequest;