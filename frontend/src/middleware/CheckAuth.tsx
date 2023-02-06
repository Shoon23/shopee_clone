import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRefreshToken } from "../hooks/useRefreshToken";
type Props = {};

const CheckAuth: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);

  const isExist = user !== null;

  const { isLoading, isError } = useQuery(["user"], useRefreshToken, {
    enabled: isExist,
    refetchOnMount: false,
    retry: false,
  });
  if (isError) {
    return <Outlet />;
  }

  return isLoading ? (
    <div className="">Loading.....</div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default CheckAuth;
