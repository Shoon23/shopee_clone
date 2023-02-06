import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {
  data: any;
};

const SideBarItem: React.FC<Props> = ({ data }) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between px-5 pt-5 pb-1">
        <div className="flex gap-2">
          <data.icon className="h-6 w-6" />
          <p>{data.name}</p>
        </div>

        {isDisplay ? (
          <ChevronUpIcon
            onClick={() => setIsDisplay((prev) => !prev)}
            className="h-6 w-6 hover:stroke-orange-600"
          />
        ) : (
          <ChevronDownIcon
            onClick={() => setIsDisplay((prev) => !prev)}
            className="h-6 w-6 hover:stroke-orange-600"
          />
        )}
      </div>
      <div className="flex flex-col items-start pl-14">
        {isDisplay
          ? data.options.map((item: any) => {
              return <div className="">{item}</div>;
            })
          : null}
      </div>
    </>
  );
};

export default SideBarItem;
