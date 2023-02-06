import React, { useState } from "react";
import {
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
import SideBarItem from "./SideBarItem";
import sideBarMenu from "../constant/sideBarMenu.json";

type Props = {};

const SellerSideBar: React.FC<Props> = ({}) => {
  const [item, setItem] = useState([1, 2, 3, 4]);
  return (
    <div className="w-1/5 bg-white">
      <div className="flex h-screen flex-col overflow-y-auto">
        {sideBarMenu.map((item: any) => {
          return <SideBarItem />;
        })}
      </div>
    </div>
  );
};

export default SellerSideBar;
