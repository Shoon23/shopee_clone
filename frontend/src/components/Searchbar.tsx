import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";

interface Props {}

const Searchbar: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const privateApi = usePrivateAxios(queryClient);
  const user: any = queryClient.getQueryData(["user"]);

  const { data } = useQuery(["cart"], async () => {
    const res = await privateApi.get(`/cart/${user?.cart?.cart_id}`);
    return res.data.cart_item;
  });
  return (
    <div className="navbar gap-10">
      <div className=" normal-case text-3xl text-white">
        <Link to={"/"} className="flex">
          <ShoppingBagIcon className="w-16 h-16" />
          <div className="self-center">Shopee</div>
        </Link>
      </div>

      <div className="flex bg-white w-3/4 gap-2 h-12 rounded-sm">
        <input
          type="text"
          placeholder="Search"
          className="input w-full h-full"
        />
        <div className="self-center h-full">
          <MagnifyingGlassIcon className="stroke-white  hover:bg-orange-700 bg-orange-600 h-10 p-2 m-1 w-10" />
        </div>
      </div>

      <div className="dropdown dropdown-hover dropdown-end">
        <Link to={"/cart"}>
          <ShoppingCartIcon tabIndex={0} className="h-7 w-7 stroke-white" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 w-80 p-2 rounded-box border border-gray-500"
        >
          {data ? (
            <>
              <li className="menu-title">
                <span>Recently Added Products</span>
              </li>
              {data.slice(0, 5).map((item: any) => {
                return (
                  <li key={item.product_id}>
                    <div className="flex flex-row justify-between">
                      <div className="flex gap-2">
                        <div className="avatar m-0">
                          <div className="w-8 rounded">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <span>{item.product_name}</span>
                      </div>

                      <span className="text-orange-600">{item.price}</span>
                    </div>
                  </li>
                );
              })}
              <div className="mx-4 flex justify-between mt-2">
                <div className="">{data.length - 5 > 0 && data.length - 5}</div>
                <Link
                  to={"/cart"}
                  className="bg-orange-600 text-white p-1 hover:bg-orange-700 rounded-md"
                >
                  View My Shopping Cart
                </Link>
              </div>
            </>
          ) : (
            <div className="flex flex-col h-72 justify-center	items-center gap-3">
              <ShoppingBagIcon className="w-20 h-20 stroke-orange-600" />
              <p className="">No Products Yet</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
