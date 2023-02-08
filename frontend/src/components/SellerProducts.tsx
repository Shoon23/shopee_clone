import React, { useEffect, useState } from "react";
import SellerProductList from "./SellerProductList";

type Props = {};

const SellerProducts: React.FC<Props> = ({}) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="m-2 bg-white pb-2 shadow">
      <div className="m-2 flex gap-2 p-5">
        <div
          onClick={() => setSelected(1)}
          className={`cursor-pointer ${
            selected === 1 && `border-b-2 border-orange-600 text-orange-600`
          }`}
        >
          All
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`cursor-pointer ${
            selected === 2 && `border-b-2 border-orange-600 text-orange-600`
          }`}
        >
          Sold Out
        </div>
      </div>
      <SellerProductList selected={selected} />
    </div>
  );
};

export default SellerProducts;
