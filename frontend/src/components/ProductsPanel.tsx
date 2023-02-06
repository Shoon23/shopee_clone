import React from "react";
import Product from "./Product";

interface Props {
  isLoading: boolean;
  products: any;
}

const ProductsPanel: React.FC<Props> = ({ products, isLoading }) => {
  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <>
      <div className="w-10/12  self-center flex flex-col gap-2">
        <div className="grid grid-cols-5 gap-5">
          {products ? (
            products.map((item: any) => (
              <Product key={item.product_id} product_details={item} />
            ))
          ) : (
            <div>No Product Available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPanel;
