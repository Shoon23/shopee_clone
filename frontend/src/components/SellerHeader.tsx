import React from "react";
import {
  ShoppingBagIcon,
  BellIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

type Props = {};

const SellerHeader: React.FC<Props> = ({}) => {
  return (
    <header className="flex h-16 place-items-center justify-between border bg-white px-5 shadow-lg">
      <div className="flex gap-2">
        <div className="flex">
          <ShoppingBagIcon className="h-7 w-7 stroke-orange-600" />
          <p className="text-2xl text-orange-600">Shopee</p>
        </div>
        <p className="text-2xl text-black">Seller Centre</p>
      </div>
      <div className="flex gap-2">
        <div className="flex place-items-center">
          <div className="avatar">
            <div className="h-10 w-10 rounded-full">
              <img src="https://images.unsplash.com/photo-1675630006366-6b662dbbdcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80" />
            </div>
          </div>
          <p>seanwilfredcustodio</p>
        </div>
        <div className="flex place-items-center">
          <Squares2X2Icon className="h-7 w-7" />
          <BellIcon className="h-7 w-7" />
          <p className="rounded-xl border border-black p-2 text-sm">
            Education Hub
          </p>
        </div>
      </div>
    </header>
  );
};

export default SellerHeader;
