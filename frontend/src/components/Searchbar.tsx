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

  const isLoggedIn = user === null;
  console.log(isLoggedIn);

  const { data } = useQuery(
    ["cart"],
    async () => {
      const res = await privateApi.get(`/cart/${user?.cart?.cart_id}`);
      return res.data.cart_item;
    },
    {
      enabled: isLoggedIn,
      refetchOnMount: false,
    }
  );
  return (
    <div className="navbar gap-10">
      <div className=" text-3xl normal-case text-white">
        <Link to={"/"} className="flex">
          <ShoppingBagIcon className="h-16 w-16" />
          <div className="self-center">Shopee</div>
        </Link>
      </div>

      <div className="flex h-12 w-3/4 gap-2 rounded-sm bg-white">
        <input
          type="text"
          placeholder="Search"
          className="input h-full w-full"
        />
        <div className="h-full self-center">
          <MagnifyingGlassIcon className="m-1  h-10 w-10 bg-orange-600 stroke-white p-2 hover:bg-orange-700" />
        </div>
      </div>

      <div className="dropdown-end dropdown dropdown-hover">
        <Link to={"/cart"}>
          <ShoppingCartIcon tabIndex={0} className="h-7 w-7 stroke-white" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-80 border border-gray-500 bg-base-100 p-2"
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
              <div className="mx-4 mt-2 flex justify-between">
                <div className="">{data.length - 5 > 0 && data.length - 5}</div>
                <Link
                  to={"/cart"}
                  className="rounded-md bg-orange-600 p-1 text-white hover:bg-orange-700"
                >
                  View My Shopping Cart
                </Link>
              </div>
            </>
          ) : (
            <div className="flex h-72 flex-col items-center	justify-center gap-3">
              <ShoppingBagIcon className="h-20 w-20 stroke-orange-600" />
              <p className="">No Products Yet</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
