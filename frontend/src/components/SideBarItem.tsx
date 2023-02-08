import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
  isSelected: number;
  handleClick: () => void;
  index: number;
};

const SideBarItem: React.FC<Props> = ({
  data,
  isSelected,
  handleClick,
  index,
}) => {
  return (
    <Link
      to={`/seller${data.path}`}
      onClick={handleClick}
      className={`m-3 flex cursor-pointer justify-between px-2 pt-2 pb-1  hover:rounded-lg hover:bg-orange-200 ${
        index === isSelected && `rounded-lg bg-orange-200`
      }`}
    >
      <div className="flex gap-2">
        <data.icon className="h-6 w-6 " />
        <p>{data.name}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
