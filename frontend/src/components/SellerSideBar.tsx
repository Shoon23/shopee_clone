import React, { useState } from "react";
import SideBarItem from "./SideBarItem";

import { ShoppingBagIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

type Props = {};

const SellerSideBar: React.FC<Props> = ({}) => {
  const productMenu = {
    name: "Product",
    icon: ShoppingBagIcon,
    options: ["My Product", "Add New Product"],
    path: "/products",
  };

  return (
    <div className="h-screen w-1/5 overflow-x-scroll bg-white">
      <div className="flex flex-col">
        <SideBarItem data={productMenu} />;
      </div>
    </div>
  );
};

export default SellerSideBar;
