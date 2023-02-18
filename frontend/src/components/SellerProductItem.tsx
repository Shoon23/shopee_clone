import React from "react";
import { usePrivateAxios } from "../hooks/usePrivateAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  productDetails: any;
}

interface iDeleteForm {
  product_id: string;
  product_variations: Array<{
    variation_id: string;
    variation_name: string;
    product_id: string;
  }>;
}

const SellerProductItem: React.FC<Props> = ({ productDetails }) => {
  const queryClient = useQueryClient();
  const api = usePrivateAxios(queryClient);

  const { mutate: deleteProduct } = useMutation({
    mutationFn: async (deleteData: iDeleteForm) => {
      const res = await api.delete("/products/delete", { data: deleteData });
      return res.data;
    },
  });

  const handleDelete = () => {
    const deleteForm: iDeleteForm = {
      product_id: productDetails.product_id,
      product_variations: productDetails.product_variation,
    };
    deleteProduct(deleteForm);
  };

  return (
    <tbody className="">
      <tr className="">
        <th className="">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={`http://localhost:8080/${productDetails?.product_images[0]?.product_image_link}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{productDetails.product_name}</div>
            </div>
          </div>
        </td>
        <td>
          {productDetails.product_variation ? (
            productDetails.product_variation.map((item: any) => {
              return (
                <>
                  {item.variation_name}
                  <br />
                  {item.variation_item &&
                    item.variation_item.map((item: any) => {
                      return (
                        <span className="badge badge-ghost badge-sm">
                          {item.variation_item_name}
                        </span>
                      );
                    })}
                </>
              );
            })
          ) : (
            <div>No Variants</div>
          )}
        </td>
        <td>{productDetails.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">
            {productDetails.quantity}
          </button>
        </th>
        <th className="flex gap-1">
          <button className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
            Update
          </button>
          <button
            onClick={handleDelete}
            className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default SellerProductItem;
