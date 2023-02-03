import React from "react";
import { useNavigate, redirect } from "react-router-dom";

type Props = {
  product_details: any;
};

const Product: React.FC<Props> = ({ product_details }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/product/${product_details.id}`);
      }}
      className="card w-52 h-72 bg-base-100 shadow-xl flex transition ease-in-out hover:scale-105 hover:border-2 hover:border-orange-600"
    >
      <img
        className="h-40 object-contain rounded-2xl"
        src={product_details.image}
        alt="Shoes"
      />
      <div className="flex flex-col gap-8">
        <div className="break-all self-start text-bold text-xs p-1">
          {product_details.title}
        </div>
        <div className="flex justify-between mx-2">
          <div className="text-orange-600">{product_details.price}</div>
          <div className="text-gray-400">0</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
