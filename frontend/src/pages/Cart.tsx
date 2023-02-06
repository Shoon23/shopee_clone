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
    <div className="flex w-10/12 flex-col place-items-center gap-5 self-center ">
      <div className="justify-self-center text-2xl text-orange-600">
        Shopping Cart
      </div>
      <div className="flex h-14 w-full items-center bg-white shadow-md">
        <div className="flex w-1/2 gap-2 pl-5">
          <input type="checkbox" className="checkbox-error checkbox" />
          <label className="text-zinc-500">Product</label>
        </div>
        <div className="flex w-1/2 justify-around">
          <div className="h-max text-zinc-500">Unit Price</div>
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

      <div className="sticky bottom-0 grid h-44 w-full grid-cols-8 grid-rows-4 place-items-center items-end border border-slate-300 bg-white">
        <div className="col-span-4 w-full self-end border-b border-dashed border-black"></div>
        <div className=" col-span-2 flex w-full justify-center gap-2 border-b border-dashed border-black pb-2">
          <TicketIcon className="h-7 w-7 stroke-orange-600" />
          <div className="font-bold">Platform Voucher</div>
        </div>
        <div className="col-span-2 flex w-full  justify-center border-b border-dashed border-black pb-2">
          <div className="text-blue-600">Select Or Enter Code</div>
        </div>
        <div className="col-span-4 w-full self-end border-b border-dashed border-black"></div>

        <div className="col-span-3 flex w-full place-items-center gap-10 border-b border-dashed border-black pb-2">
          <div className="flex place-items-center gap-1 justify-self-start">
            <input type="checkbox" className="checkbox-error checkbox" />
            <CurrencyDollarIcon className="h-5 w-5 stroke-yellow-400" />
            <div className="text-sm">Shopee Coins</div>
          </div>
          <div className="flex place-items-center">
            <div className="text-sm font-bold">Insufficient Coins Balance</div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-xs btn-circle text-info"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 stroke-current"
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
                className="card dropdown-content compact rounded-box w-64 bg-base-100 shadow"
              >
                <div className="card-body">
                  <h2 className="card-title">You needed more info?</h2>
                  <p>Here is a description!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-dashed border-black pb-2 text-center">
          <div className="">P100</div>
        </div>

        <div className="col-span-full row-span-2 row-start-3 flex w-full place-items-center justify-around self-center">
          <div className="">
            <input type="checkbox" className="checkbox-error checkbox" />
          </div>
          <div className="">SELECT ALL(39)</div>
          <div className="">DELETE</div>
          <div className="">Remove Inactive Products</div>
          <div className="">Move to my likes</div>
          <div className="col-span-2 flex flex-col">
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
