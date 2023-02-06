import React from "react";
import {
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";

interface Props {}

const Cart: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const cart = queryClient.getQueryData(["cart"]);

  return (
    <div className="flex flex-col place-items-center w-10/12 self-center gap-5 ">
      <div className="text-orange-600 text-2xl justify-self-center">
        Shopping Cart
      </div>
      <div className="flex w-full bg-white h-14 items-center shadow-md">
        <div className="flex gap-2 w-1/2 pl-5">
          <input type="checkbox" className="checkbox checkbox-error" />
          <label className="text-zinc-500">Product</label>
        </div>
        <div className="flex justify-around w-1/2">
          <div className="text-zinc-500 h-max">Unit Price</div>
          <div className="text-zinc-500">Quantity</div>
          <div className="text-zinc-500">Total Price</div>
          <div className="text-zinc-500">Actions</div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="flex gap-3 h-16 place-content-start place-items-center border-b border-slate-200">
          <div className="w-16 flex justify-center">
            <input type="checkbox" className="checkbox checkbox-error" />
          </div>
          <BuildingStorefrontIcon className="w-6 h-6" />
          <div className="font-bold text-base">Shop1</div>
          <ChatBubbleLeftRightIcon className="w-6 h-6 stroke-orange-600" />
        </div>
        <div className="flex h-36 place-items-center border-b border-slate-200">
          <div className="h-16 w-16 flex place-content-center place-items-center">
            <input type="checkbox" className="checkbox checkbox-error" />
          </div>

          <div className="flex gap-2 w-80 ">
            <img
              className="h-20 w-20 rounded-2xl"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
            <div className="break">
              <p>Nike Socks pure cotton</p>
              <p className="text-orange-600">Nike Socks pure cotton</p>
            </div>
          </div>

          <div className="dropdown w-56">
            <label tabIndex={0} className="">
              Variations:
            </label>
            <ul
              tabIndex={0}
              className="border shadow-md border-orange-700 dropdown-content menu p-2 bg-base-100 rounded-box w-80 gap-2 "
            >
              <li className="flex flex-row gap-2">
                <div className="hover:bg-white">Types:</div>
                <button className="btn btn-outline btn-error w-16">
                  Error
                </button>
                <button className="btn btn-outline btn-error w-16">
                  Error
                </button>
                <button className="btn btn-outline btn-error w-16">
                  Error
                </button>
              </li>
              <li className="flex flex-row gap-2">
                <div className="hover:bg-white">Size:</div>
                <button className="btn btn-outline btn-error w-16">
                  Error
                </button>
                <button className="btn btn-outline btn-error w-16">
                  Error
                </button>
                <button className="btn btn-outline btn-error w-16">
                  Error
                </button>
              </li>
            </ul>
          </div>
          <div className="w-32">40 dollars</div>
          <div className="btn-group w-40">
            <button className="btn btn-error h-1 w-1">«</button>
            <button className="btn btn-error h-1 w-1">1</button>
            <button className="btn btn-error h-1 w-1">»</button>
          </div>
          <div className="w-40">90 Dollars</div>
          <div className="w-24">
            <button>Delete</button>
          </div>
        </div>
        <div className="flex place-items-center m-5 gap-2">
          <div className=" justify-self-center">
            <TicketIcon className="w-7 h-7 stroke-orange-600" />
          </div>
          <div className="text-blue-500 text-sm">Add Voucher</div>
        </div>
      </div>

      <div className="bg-white w-full grid grid-cols-8 grid-rows-4 h-44 place-items-center sticky bottom-0 border border-slate-300 items-end">
        <div className="col-span-4 border-b border-black w-full self-end border-dashed"></div>
        <div className=" flex gap-2 border-b border-black w-full col-span-2 justify-center pb-2 border-dashed">
          <TicketIcon className="w-7 h-7 stroke-orange-600" />
          <div className="font-bold">Platform Voucher</div>
        </div>
        <div className="flex col-span-2 pb-2  border-b border-black w-full justify-center border-dashed">
          <div className="text-blue-600">Select Or Enter Code</div>
        </div>
        <div className="col-span-4 border-b border-black w-full self-end border-dashed"></div>

        <div className="col-span-3 flex place-items-center gap-10 border-b border-black pb-2 w-full border-dashed">
          <div className="flex place-items-center gap-1 justify-self-start">
            <input type="checkbox" className="checkbox checkbox-error" />
            <CurrencyDollarIcon className="w-5 h-5 stroke-yellow-400" />
            <div className="text-sm">Shopee Coins</div>
          </div>
          <div className="flex place-items-center">
            <div className="text-sm font-bold">Insufficient Coins Balance</div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-ghost btn-xs text-info"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </label>
              <div
                tabIndex={0}
                className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
              >
                <div className="card-body">
                  <h2 className="card-title">You needed more info?</h2>
                  <p>Here is a description!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-b border-black pb-2 w-full border-dashed">
          <div className="">P100</div>
        </div>

        <div className="flex col-span-full w-full row-start-3 justify-around place-items-center row-span-2 self-center">
          <div className="">
            <input type="checkbox" className="checkbox checkbox-error" />
          </div>
          <div className="">SELECT ALL(39)</div>
          <div className="">DELETE</div>
          <div className="">Remove Inactive Products</div>
          <div className="">Move to my likes</div>
          <div className="flex flex-col col-span-2">
            <div className="">Total(39 items): P7,793</div>
            <div className="">Saved P24142</div>
          </div>
          <div className="">
            <button className="btn btn-error text-white">Error</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
