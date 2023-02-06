import React from "react";
import { UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";

interface Props {}

const User: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();

  const user: any = queryClient.getQueryData(["user"]);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-48 gap-5">
        <div className="flex gap-2">
          <UserCircleIcon className="h-12 w-12" />
          <p className="self-center">User1</p>
        </div>
        <div className="flex gap-2">
          <UserIcon className="w-7 h-7 stroke-blue-500" />
          <div className="flex flex-col gap-2">
            <div className="font-bold ">My Account</div>
            <div className="text-sm">Profile</div>
            <div className="text-sm">Bank & Cards</div>
            <div className="text-sm">Addresses</div>
            <div className="text-sm">Change Password</div>
          </div>
        </div>
      </div>
      <div className="bg-white w-3/4 flex flex-col ">
        <div className="p-5">
          <div className="text-xl font-bold">My Profile</div>
          <div className="text-sm">Manage and protect your account</div>
        </div>
        <div className="p-5 h-max ">
          <form action="flex flex-col h-full">
            <div className="flex mb-5 gap-5">
              <label className="text-zinc-400 w-40 text-end">Username</label>
              <div className="">{`${user?.first_name} ${user?.last_name}`}</div>
            </div>
            <div className="flex gap-5 mb-5 ">
              <label className="text-zinc-400 self-center w-40 text-end">
                Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs input-bordered"
              />
            </div>
            <div className="flex gap-5 mb-5">
              <label className="text-zinc-400 self-center w-40 text-end">
                Email
              </label>
              <label className="">{user?.email}</label>
              <a href="">change</a>
            </div>
            <div className="flex gap-5 mb-5">
              <label className="text-zinc-400 self-center w-40 text-end">
                Phone Number
              </label>
              <label htmlFor="">049291085910</label>
              <a href="">change</a>
            </div>

            <div className="flex gap-5 mb-5">
              <label className="text-zinc-400 self-center w-40 text-end">
                Gender
              </label>
              <input
                type="radio"
                name="radio-8"
                className="radio radio-error"
                checked
              />
              <label htmlFor="">Male</label>
              <input
                type="radio"
                name="radio-8"
                className="radio radio-error"
              />
              <label htmlFor="">Female</label>
              <input
                type="radio"
                name="radio-8"
                className="radio radio-error"
              />
              <label htmlFor="">Other</label>
            </div>

            <div className="flex gap-5">
              <div className="self-center text-zinc-400 w-40 text-end">
                Date of Birth
              </div>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 btn-outline btn-error ">
                  1
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
                <label tabIndex={0} className="btn m-1 btn-outline btn-error ">
                  September
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
                <label tabIndex={0} className="btn m-1 btn-outline btn-error ">
                  2023
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
