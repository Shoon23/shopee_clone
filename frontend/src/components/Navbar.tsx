import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link, Navigate } from "react-router-dom";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);

  return (
    <div className="flex place-content-between py-2">
      <div className="flex gap-3">
        <Link
          to={"/seller/products"}
          className="text-sm text-white hover:text-gray-300"
        >
          Seller Centre
        </Link>
        <div className="text-sm text-white hover:text-gray-300">
          Sell on Shopee
        </div>
      </div>

      <div className="flex gap-3">
        <div className="text-sm text-white hover:text-gray-300">
          Notification
        </div>
        <div className="text-sm text-white hover:text-gray-300">Help</div>
        <div className="text-sm text-white hover:text-gray-300">English</div>

        {user ? (
          <Link to={"/user"} className="dropdown dropdown-end dropdown-hover ">
            <div tabIndex={0} className="flex gap-1 ">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="" />
                </div>
              </div>
              <div className="text-white hover:text-gray-300">User1</div>
            </div>

            <ul
              tabIndex={0}
              className="w-34 dropdown-content menu rounded-box w-52 border bg-base-100 p-2 shadow"
            >
              <li>
                <a className="text-sm">My Account</a>
              </li>
              <li>
                <a className="text-sm">My Purchase</a>
              </li>
              <li>
                <a className="text-sm">Logout</a>
              </li>
            </ul>
          </Link>
        ) : (
          <div className="flex gap-1 ">
            <Link
              to={"auth/signup"}
              className="text-sm text-white hover:text-gray-300"
            >
              Signup
            </Link>
            <Link
              to={"auth/login"}
              className="text-sm text-white hover:text-gray-300"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
