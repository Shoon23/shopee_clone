import React from "react";
import {
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

type Props = {
  cartItem: any;
};

const CartItem: React.FC<Props> = ({ cartItem }) => {
  return (
    <div className="w-full bg-white">
      <div className="flex h-16 place-content-start place-items-center gap-3 border-b border-slate-200">
        <div className="flex w-16 justify-center">
          <input type="checkbox" className="checkbox-error checkbox" />
        </div>
        <BuildingStorefrontIcon className="h-6 w-6" />
        <div className="text-base font-bold">Shop1</div>
        <ChatBubbleLeftRightIcon className="h-6 w-6 stroke-orange-600" />
      </div>
      <div className="flex h-36 place-items-center border-b border-slate-200">
        <div className="flex h-16 w-16 place-content-center place-items-center">
          <input type="checkbox" className="checkbox-error checkbox" />
        </div>
        <div className="flex w-80 gap-2 ">
          <img
            className="h-20 w-20 rounded-2xl"
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
          <div className="break">
            <p>{cartItem.product_name}</p>
            <p className="text-orange-600">{cartItem.product_name}</p>
          </div>
        </div>
        <div className="dropdown w-56">
          <label tabIndex={0} className="">
            Variations:
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box w-80 gap-2 border border-orange-700 bg-base-100 p-2 shadow-md "
          >
            <li className="flex flex-row gap-2">
              <div className="hover:bg-white">Types:</div>
              <button className="btn-outline btn btn-error w-16">Error</button>
              <button className="btn-outline btn btn-error w-16">Error</button>
              <button className="btn-outline btn btn-error w-16">Error</button>
            </li>
            <li className="flex flex-row gap-2">
              <div className="hover:bg-white">Size:</div>
              <button className="btn-outline btn btn-error w-16">Error</button>
              <button className="btn-outline btn btn-error w-16">Error</button>
              <button className="btn-outline btn btn-error w-16">Error</button>
            </li>
          </ul>
        </div>
        <div className="w-32">{cartItem.price}</div>
        <div className="btn-group w-40">
          <button className="r btn h-1 w-1 border-orange-600 bg-orange-600 hover:border-orange-700 hover:bg-orange-700">
            «
          </button>
          <button className="btn h-1 w-1 border-orange-600 bg-orange-600  hover:border-orange-700 hover:bg-orange-700">
            {cartItem.quantity}
          </button>
          <button className="btn h-1 w-1 border-orange-600 bg-orange-600  hover:border-orange-700 hover:bg-orange-700">
            »
          </button>
        </div>
        <div className="w-40">{cartItem.price * cartItem.quantity}</div>
        <div className="w-24">
          <button>Delete</button>
        </div>
      </div>
      <div className="m-5 flex place-items-center gap-2">
        <div className=" justify-self-center">
          <TicketIcon className="h-7 w-7 stroke-orange-600" />
        </div>
        <div className="text-sm text-blue-500">Add Voucher</div>
      </div>
    </div>
  );
};

export default CartItem;
