import React from "react";
import { UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Props {}

const User: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();

  const user: any = queryClient.getQueryData(["user"]);
  return (
    <div className="flex justify-center">
      <div className="flex w-48 flex-col gap-5">
        <div className="flex gap-2">
          <UserCircleIcon className="h-12 w-12" />
          <p className="self-center">User1</p>
        </div>
        <div className="flex gap-2">
          <UserIcon className="h-7 w-7 stroke-blue-500" />
          <div className="flex flex-col gap-2">
            <div className="font-bold ">My Account</div>
            <div className="cursor-pointer text-sm hover:text-orange-600">
              Profile
            </div>
            <div className="cursor-pointer text-sm hover:text-orange-600">
              Bank & Cards
            </div>
            <div className="cursor-pointer text-sm hover:text-orange-600 ">
              Addresses
            </div>
            <div className="cursor-pointer text-sm hover:text-orange-600">
              Change Password
            </div>
            <Link
              to={"/seller"}
              className="cursor-pointer text-sm hover:text-orange-600"
            >
              Seller Center
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-3/4 flex-col bg-white ">
        <div className="p-5">
          <div className="text-xl font-bold">My Profile</div>
          <div className="text-sm">Manage and protect your account</div>
        </div>
        <div className="h-max p-5 ">
          <form action="flex flex-col h-full">
            <div className="mb-5 flex gap-5">
              <label className="w-40 text-end text-zinc-400">Username</label>
              <div className="">{`${user?.first_name} ${user?.last_name}`}</div>
            </div>
            <div className="mb-5 flex gap-5 ">
              <label className="w-40 self-center text-end text-zinc-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input w-full max-w-xs"
              />
            </div>
            <div className="mb-5 flex gap-5">
              <label className="w-40 self-center text-end text-zinc-400">
                Email
              </label>
              <label className="">{user?.email}</label>
              <a href="">change</a>
            </div>
            <div className="mb-5 flex gap-5">
              <label className="w-40 self-center text-end text-zinc-400">
                Phone Number
              </label>
              <label htmlFor="">049291085910</label>
              <a href="">change</a>
            </div>

            <div className="mb-5 flex gap-5">
              <label className="w-40 self-center text-end text-zinc-400">
                Gender
              </label>
              <input
                type="radio"
                name="radio-8"
                className="radio-error radio"
                checked
              />
              <label htmlFor="">Male</label>
              <input
                type="radio"
                name="radio-8"
                className="radio-error radio"
              />
              <label htmlFor="">Female</label>
              <input
                type="radio"
                name="radio-8"
                className="radio-error radio"
              />
              <label htmlFor="">Other</label>
            </div>

            <div className="flex gap-5">
              <div className="w-40 self-center text-end text-zinc-400">
                Date of Birth
              </div>
              <div className="dropdown">
                <label tabIndex={0} className="btn-outline btn btn-error m-1 ">
                  1
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <label tabIndex={0} className="btn-outline btn btn-error m-1 ">
                  September
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <label tabIndex={0} className="btn-outline btn btn-error m-1 ">
                  2023
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex w-full pl-44 pt-6">
              <button className="btn btn-error text-white ">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
