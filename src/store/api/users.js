import { httpClient } from "../../Api";

export const getUsers = (count) => {
  return httpClient.get("/users", {
    params: {
      total: 1,
      per_page: count,
    },
  });
};
