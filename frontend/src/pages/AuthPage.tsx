import React from "react";
import Footer from "../components/Footer";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

type Props = {};

const AuthPage: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="h-screen">
        <header className="bg-white flex justify-between px-28 py-2">
          <div className="flex normal-case text-2xl place-items-center gap-5">
            <div className="flex">
              <ShoppingBagIcon className=" stroke-orange-600 w-16 h-16" />
              <div className="self-center text-orange-600 ">Shopee</div>
            </div>
            <div className="">Sign Up</div>
          </div>
          <div className="text-orange-600 self-center">Need Help?</div>
        </header>
        <div className=" bg-orange-600 h-screen flex justify-center ">
          <div className="flex h-3/4 w-2/4 self-center place-content-center">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col self-center">
                <ShoppingBagIcon className="stroke-white w-72 h-72" />
                <div className="text-white text-7xl text-center">Shopee</div>
              </div>
              <div className="text-white text-2xl">
                The leading online shopping platform <br />
                <p className="text-center text-2xl">
                  in Southeast Asia and Taiwan
                </p>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AuthPage;
