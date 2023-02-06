import React from "react";
import SellerHeader from "../components/SellerHeader";
import SellerSideBar from "../components/SellerSideBar";

type Props = {};

const SellerPage: React.FC<Props> = ({}) => {
  return (
    <div className="bg-gray-100">
      <SellerHeader />
      <div className="flex">
        <SellerSideBar />
        <div className="flex-1">Main</div>
      </div>
    </div>
  );
};

export default SellerPage;
