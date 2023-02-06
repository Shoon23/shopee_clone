import React from "react";
import SellerHeader from "../components/SellerHeader";
import SellerSideBar from "../components/SellerSideBar";

type Props = {};

const SellerPage: React.FC<Props> = ({}) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <SellerHeader />
      <div className="flex">
        <SellerSideBar />
        <div className="h-screen flex-1 overflow-x-scroll">
          Main
          <div className="h-96">1</div>
          <div className="h-96">1</div>
          <div className="h-96">1</div>
          <div className="h-96">1</div>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
