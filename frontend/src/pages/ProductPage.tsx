import React from "react";
import ProductBriefing from "../components/ProductBriefing";
import ProductDetails from "../components/ProductDetails";
import ProductRating from "../components/ProductRating";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

type Props = {};

const ProductPage: React.FC<Props> = ({}) => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery(["product"], async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  if (isLoading || isFetching) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="flex flex-col place-items-center gap-5">
      <ProductBriefing product_details={data} />
      <div className="flex p-5 w-10/12 gap-24 bg-white divide-x-2 ">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="flex-col flex self-center gap-2">
            <div className="">Shop1</div>
            <div className="flex gap-2">
              <button className="btn btn-outline btn-error btn-sm">
                Chat now
              </button>
              <button className="btn btn-outline btn-sm">View Shop</button>
            </div>
          </div>
        </div>
        <div className="flex place-items-center gap-10 pl-5">
          <div className="flex flex-col gap-6">
            <div className="">Rating 12k</div>
            <div className="">Products 12k</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="">Joined 30 months ago</div>
            <div className="">Followers 40.6k</div>
          </div>
        </div>
      </div>
      <ProductDetails
        description={data?.description}
        category={data?.category}
      />
      <ProductRating rate={data?.rating?.rate} />
    </div>
  );
};

export default ProductPage;
