import React, { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";
import SellerProductItem from "./SellerProductItem";
import NewProducts from "./NewProducts";
import UpdateProductForm from "./UpdateProductForm";

interface Props {
  selected: number;
}

const SellerProductList: React.FC<Props> = ({ selected }) => {
  const queryClient = useQueryClient();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [updateProduct, setUpdateProduct] = useState();

  const shop: any = queryClient.getQueryData(["shop"]);
  const api = usePrivateAxios(queryClient);

  const { data, isLoading } = useQuery(["seller_products"], async () => {
    const res = await api.get(`/seller/products/${shop.shop_id}?limit=10`);

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
        <UpdateProductForm
          updateProduct={updateProduct}
          setUpdateProduct={setUpdateProduct}
          isShow={isUpdate}
          setIsShow={setIsUpdate}
        />
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
          {data.length !== 0 ? (
            data.slice(0, 10).map((productDetails: any) => {
              return (
                <SellerProductItem
                  isUpdate={isUpdate}
                  setIsUpdate={setIsUpdate}
                  setUpdateProduct={setUpdateProduct}
                  key={productDetails.product_id}
                  productDetails={productDetails}
                />
              );
            })
          ) : (
            <tbody>
              <tr>
                <td>
                  <div className=" absolute top-20 right-1/2">No Products</div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
        <div className="mt-16"></div>

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
