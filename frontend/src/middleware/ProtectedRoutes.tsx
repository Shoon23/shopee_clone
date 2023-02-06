import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

interface Props {}

const ProtectedRoutes: React.FC<Props> = ({}) => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to={"auth/login"}
      state={{ prevPath: location.pathname }}
      replace
    />
  );
};

export default ProtectedRoutes;
