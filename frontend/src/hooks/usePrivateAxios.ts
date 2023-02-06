import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { QueryClient } from "@tanstack/react-query";
import { useRefreshToken } from "./useRefreshToken";
import jwt_decode from "jwt-decode";

export const usePrivateAxios = (queryClient: QueryClient) => {
  const user: any = queryClient.getQueryData(["user"]);

  const privateAxios = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });

  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  const onRequest = async (req: AxiosRequestConfig) => {
    if (!user) return req;

    const decoded: any = jwt_decode(user?.accessToken);

    const token_expiration = new Date(1000 * decoded?.exp).toLocaleString();
    const current_time = new Date().toLocaleString();

    if (current_time > token_expiration) {
      const user = await useRefreshToken();

      queryClient.setQueryData(["user"], user);
      req.headers!.Authorization = `Bearer ${user?.accessToken}`;
    }
    return req;
  };

  privateAxios.interceptors.request.use(onRequest, onRequestError);

  return privateAxios;
};
