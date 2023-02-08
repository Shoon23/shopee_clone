import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import { sideBarMenu } from "../constant/sideBarMenu";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

type Props = {};

const SellerSideBar: React.FC<Props> = ({}) => {
  const [isSelected, setIsSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setIsSelected(index);
  };

  return (
    <div className="h-screen w-1/5 overflow-x-scroll bg-white">
      <div className="flex flex-col">
        {sideBarMenu.map((item: any, index) => {
          return (
            <SideBarItem
              index={index}
              isSelected={isSelected}
              handleClick={() => handleClick(index)}
              key={item.name}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SellerSideBar;
