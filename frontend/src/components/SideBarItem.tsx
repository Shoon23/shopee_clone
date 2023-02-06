import {
  ChevronDownIcon,
  ChevronUpIcon,
  InboxStackIcon,
  ClipboardDocumentListIcon,
  ShoppingBagIcon,
  TagIcon,
  WalletIcon,
  ChartBarIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {
  cons: React.ComponentProps<"svg">;
};

const SideBarItem: React.FC<Props> = ({ cons }) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  console.log(cons);
  return (
    <>
      <div className="flex justify-between px-5 pt-5 pb-1">
        <div className="flex gap-2">
          <p>Shipping</p>
        </div>

        {isDisplay ? (
          <ChevronUpIcon
            onClick={() => setIsDisplay((prev) => !prev)}
            className="h-6 w-6"
          />
        ) : (
          <ChevronDownIcon
            onClick={() => setIsDisplay((prev) => !prev)}
            className="h-6 w-6"
          />
        )}
        <div className="flex flex-col items-start pl-14">
          {isDisplay
            ? item.map((item) => {
                return <div className="">Shop Categories</div>;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default SideBarItem;
