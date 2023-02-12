import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
};

const SideBarItem: React.FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/seller${data.path}`}
      className={`m-3 flex cursor-pointer justify-between rounded-lg bg-orange-200 px-2  pt-2 pb-1 hover:rounded-lg hover:bg-orange-200`}
    >
      <div className="flex gap-2">
        <data.icon className="h-6 w-6 " />
        <p>{data.name}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
