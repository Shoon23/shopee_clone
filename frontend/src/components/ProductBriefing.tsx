import React, { useEffect, useState } from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

type Props = {
  product_details: any;
};

const ProductBriefing: React.FC<Props> = ({ product_details }) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    setImage(product_details?.image);
  }, []);

  return (
    <div className="flex w-10/12 bg-white p-5 gap-10">
      <div className="flex-col gap-5 flex">
        <div className="">
          <img className="h-96 w-96" src={image} alt="Shoes" />
        </div>
        <div className="flex w-96 overflow-x-auto gap-3 h-24">
          <img
            onClick={(e: React.SyntheticEvent<HTMLImageElement>) =>
              setImage(e.currentTarget.src)
            }
            className="h-24 w-24 border-2 border-orange-600"
            src={product_details?.image}
            alt="Shoes"
          />
        </div>
        <div className="flex w-96">
          <div className="flex flex-row h-16 flex-grow card rounded-box place-items-center gap-2">
            <div className="">Share:</div>
            <div className="">M</div>
            <div className="">F</div>
            <div className="">P</div>
            <div className="">T</div>
          </div>
          <div className="divider divider-horizontal h-7 self-center"></div>
          <div className="flex gap-2 flex-row h-16 flex-grow card rounded-box place-items-center">
            <HeartIcon className="w-5 h-5" />
            <div className="">FAVORITE(12.4k)</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="font-bold text-lg">{product_details?.title}</div>
        <div className="flex divide-x-2 gap-5">
          <div className="flex gap-1">
            <div className="text-orange-600 self-center">
              {product_details?.rating?.rate}
            </div>
            <div className="rating">
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500" />
            </div>
          </div>

          <div className="flex pl-2 gap-2">
            <div className="font-bold">{product_details?.rating?.count}</div>
            <div className="">Ratings</div>
          </div>
          <div className="flex pl-2">
            <div className="font-bold">1.2k</div>
            <div className="">Ratings</div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col p-5 gap-2">
          <div className="flex gap-4">
            <div className="text-gray-400 self-center">P123</div>
            <div className="text-2xl text-orange-600">
              {product_details?.price}
            </div>
          </div>
          <div className="">
            <div className="text-sm">Lowest Price Guaranteed</div>
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-4">
          <div className="">Shop Vouchers</div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-20">
              <div className="">Color</div>
              <div className="">
                <button className="btn btn-outline btn-sm">Black</button>
                <button className="btn btn-outline btn-sm">Blue</button>
                <button className="btn btn-outline btn-sm">Red</button>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="">Color</div>
              <div className="">
                <button className="btn btn-outline btn-sm">Black</button>
                <button className="btn btn-outline btn-sm">Blue</button>
                <button className="btn btn-outline btn-sm">Red</button>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="">Color</div>
              <div className="">
                <button className="btn btn-outline btn-sm">Black</button>
                <button className="btn btn-outline btn-sm">Blue</button>
                <button className="btn btn-outline btn-sm">Red</button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-error btn-outline w-36">
              Add to cart
            </button>
            <button className="btn btn-error">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBriefing;
