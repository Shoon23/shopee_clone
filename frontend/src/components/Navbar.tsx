import React, { useState } from "react";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <div className="flex place-content-between py-2">
      <div className="flex gap-3">
        <div className="text-white hover:text-gray-300 text-sm">
          Seller Centre
        </div>
        <div className="text-white hover:text-gray-300 text-sm">
          Sell on Shopee
        </div>
      </div>

      <div className="flex gap-3">
        <div className="text-white hover:text-gray-300 text-sm">
          Notification
        </div>
        <div className="text-white hover:text-gray-300 text-sm">Help</div>
        <div className="text-white hover:text-gray-300 text-sm">English</div>

        <div className="dropdown dropdown-hover dropdown-end ">
          <div tabIndex={0} className="flex gap-1 ">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="hover:text-gray-300 text-white">User1</div>
          </div>

          <ul
            tabIndex={0}
            className="menu bg-base-100 w-34 p-2 rounded-box border dropdown-content shadow w-52"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
