import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";
import { useLocation } from "react-router-dom";

interface Props {}

const CheckSeller: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const user: any = queryClient.getQueryData(["user"]);
  const api = usePrivateAxios(queryClient);
  const { data, isLoading } = useQuery(["shop"], async () => {
    const res = await api.get(`/seller/is_seller/${user.user_id}`);
    return res.data;
  });

  console.log(location);

  if (isLoading) {
    return <div className="">Loadinngg</div>;
  }

  return data ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/new_shop"}
      state={{ prevPath: location.pathname }}
      replace
    />
  );
};

export default CheckSeller;
