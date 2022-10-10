import axios from "axios";
export const httpClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
