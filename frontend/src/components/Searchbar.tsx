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

  const { data, isLoading } = useQuery(["cart"], async () => {
    const res = await privateApi.get(`/cart/${user?.cart?.cart_id}`);
    return res.data.cart_item;
  });
  console.log(data);
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

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 w-80 p-2 rounded-box border"
          >
            <li className="menu-title">
              <span>Recently Added Products</span>
            </li>
            {data.map((item: any) => {
              return (
                <li key={item.product_id}>
                  <span>{item.product_name}</span>
                </li>
              );
            })}
            <div className="flex justify-end mt-2">
              <Link
                to={"/cart"}
                className="bg-orange-600 text-white w-44 h-8 hover:bg-orange-700 "
              >
                View My Shopping Cart
              </Link>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
