import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

interface Props {}

const ProtectedRoutes: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);
  return user ? <Outlet /> : <Navigate to={"/auth/login"} />;
};

export default ProtectedRoutes;
