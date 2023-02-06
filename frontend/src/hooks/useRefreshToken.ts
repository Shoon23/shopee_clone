import { apiClient } from "../lib/apiClient";

export const useRefreshToken = async () => {
  const res = await apiClient.get("/auth/refresh_token");

  return res.data;
};
