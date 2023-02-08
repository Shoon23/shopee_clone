import React from "react";
import { Outlet } from "react-router-dom";
import SellerHeader from "../components/SellerHeader";
import SellerSideBar from "../components/SellerSideBar";
import { useQuery, useQueryClient } from "@tanstack/react-query";

type Props = {};

const SellerPage: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);

  console.log(user);

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <SellerHeader />
      <div className="flex">
        <SellerSideBar />
        <div className="h-screen flex-1 overflow-x-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
