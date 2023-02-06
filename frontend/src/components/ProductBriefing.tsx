import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  StarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

type Props = {
  product_details: any;
};

const ProductBriefing: React.FC<Props> = ({ product_details }) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    setImage(product_details?.image);
  }, []);

  return (
    <div className="flex w-10/12 gap-10 bg-white p-5">
      <div className="flex flex-col gap-5">
        <div className="">
          <img className="h-96 w-96" src={image} alt="Shoes" />
        </div>
        <div className="flex h-24 w-96 gap-3 overflow-x-auto">
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
          <div className="card rounded-box flex h-16 flex-grow flex-row place-items-center gap-2">
            <div className="">Share:</div>
            <div className="">M</div>
            <div className="">F</div>
            <div className="">P</div>
            <div className="">T</div>
          </div>
          <div className="divider divider-horizontal h-7 self-center"></div>
          <div className="card rounded-box flex h-16 flex-grow flex-row place-items-center gap-2">
            <HeartIcon className="h-5 w-5" />
            <div className="">FAVORITE(12.4k)</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="text-lg font-bold">{product_details?.title}</div>
        <div className="flex gap-5 divide-x-2">
          <div className="flex gap-1">
            <div className="self-center text-orange-600">
              {product_details?.rating?.rate}
            </div>
            <div className="rating">
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 stroke-orange-500" />
            </div>
          </div>

          <div className="flex gap-2 pl-2">
            <div className="font-bold">{product_details?.rating?.count}</div>
            <div className="">Ratings</div>
          </div>
          <div className="flex pl-2">
            <div className="font-bold">1.2k</div>
            <div className="">Ratings</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-gray-100 p-5">
          <div className="flex gap-4">
            <div className="self-center text-gray-400">P123</div>
            <div className="text-2xl text-orange-600">
              {product_details?.price}
            </div>
          </div>
          <div className="">
            <div className="text-sm">Lowest Price Guaranteed</div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-4">
          <div className="">Shop Vouchers</div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-20">
              <div className="">Color</div>
              <div className="">
                <button className="btn-outline btn btn-sm">Black</button>
                <button className="btn-outline btn btn-sm">Blue</button>
                <button className="btn-outline btn btn-sm">Red</button>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="">Color</div>
              <div className="">
                <button className="btn-outline btn btn-sm">Black</button>
                <button className="btn-outline btn btn-sm">Blue</button>
                <button className="btn-outline btn btn-sm">Red</button>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="">Color</div>
              <div className="">
                <button className="btn-outline btn btn-sm">Black</button>
                <button className="btn-outline btn btn-sm">Blue</button>
                <button className="btn-outline btn btn-sm">Red</button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="btn w-36 border-orange-600 bg-orange-50 hover:border-orange-600 hover:bg-orange-100">
              <ShoppingCartIcon className="h-5 w-5 stroke-orange-600 " />
              <p className="text-orange-600">Add to Cart</p>
            </button>
            <button className="btn border-orange-600 bg-orange-600 hover:border-orange-700 hover:bg-orange-700">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBriefing;
