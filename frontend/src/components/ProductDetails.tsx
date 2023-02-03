import React from "react";

interface Props {
  description: string;
  category: string;
}

const ProductDetails: React.FC<Props> = ({ description, category }) => {
  return (
    <div className="flex flex-col  bg-white w-10/12 m-4 gap-2 p-2">
      <div className="flex m-2 p-2 bg-gray-200">
        <div className="text-xl">Product Specifications</div>
      </div>
      <div className="m-2">Category: {category}</div>

      <div className="flex m-2 p-2 bg-gray-200">
        <div className="text-xl">Product Description</div>
      </div>
      <div className="m-2">{description}</div>
    </div>
  );
};

export default ProductDetails;
