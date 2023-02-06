import React from "react";
import { TicketIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CartItem from "../components/CartItem";
import { usePrivateAxios } from "../hooks/usePrivateAxios";

interface Props {}

const Cart: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const privateApi = usePrivateAxios(queryClient);
  const user: any = queryClient.getQueryData(["user"]);

  const { data: cart, isLoading } = useQuery(["cart"], async () => {
    const res = await privateApi.get(`/cart/${user?.cart?.cart_id}`);
    return res.data.cart_item;
  });
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

      {isLoading ? (
        <div className="">Loading..</div>
      ) : cart ? (
        cart.map((item: any) => {
          return <CartItem key={item.product_id} cartItem={item} />;
        })
      ) : (
        <div>No Item on cart</div>
      )}

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
