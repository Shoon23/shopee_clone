import React from "react";
import NewProducts from "./NewProducts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";
import SellerProductItem from "./SellerProductItem";

interface Props {
  selected: number;
}

const SellerProductList: React.FC<Props> = ({ selected }) => {
  const queryClient = useQueryClient();

  const shop: any = queryClient.getQueryData(["shop"]);
  const api = usePrivateAxios(queryClient);

  const { data, isLoading } = useQuery(["seller_products"], async () => {
    const res = await api.get(`/seller/products/${shop.shop_id}?limit=10`);
    console.log(res.data);
    return res.data;
  });

  if (isLoading) {
    return <div className="">Loading.....</div>;
  }

  return (
    <div className="px-6">
      <div className="mb-2 flex justify-between">
        <div className="">0 Product</div>
        <NewProducts />
      </div>
      <div className="flex w-full flex-col overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product Name</th>
              <th>Variations</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          {data ? (
            data.slice(0, 10).map((productDetails: any) => {
              return (
                <SellerProductItem
                  key={productDetails.product_id}
                  productDetails={productDetails}
                />
              );
            })
          ) : (
            <div>No Products</div>
          )}

          <div className="mt-16"></div>
        </table>
        {data.length === 11 && (
          <div className="btn-group grid w-40 grid-cols-2 self-end">
            <button className="btn-outline btn">Previous</button>
            <button className="btn-outline btn">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerProductList;
