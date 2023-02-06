import React from "react";
import SideBarItem from "./SideBarItem";
import { sideBarMenu } from "../constant/sideBarMenu";

type Props = {};

const SellerSideBar: React.FC<Props> = ({}) => {
  return (
    <div className="h-screen w-1/5 overflow-x-scroll bg-white">
      <div className="flex flex-col">
        {sideBarMenu.map((item: any) => {
          return <SideBarItem data={item} />;
        })}
      </div>
    </div>
  );
};

export default SellerSideBar;
