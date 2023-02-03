import React from "react";
import {
  HandThumbUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

interface Props {
  rate: number;
}

const ProductRating: React.FC<Props> = ({ rate }) => {
  return (
    <div className="w-10/12 bg-white">
      <div className="flex flex-col m-5 gap-2">
        <div className="text-xl">Product Ratings</div>
        <div className="flex gap-7 bg-orange-50">
          <div className="flex flex-col m-5">
            <div className="flex gap-2">
              <span className=" text-3xl text-orange-600">{rate}</span>
              <span className="text-orange-600 self-center">out of 5</span>
            </div>
            <div className="rating rating-md">
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500 fill-orange-500" />
              <StarIcon className="w-8 h-8 stroke-orange-500" />
            </div>
          </div>
          <div className="flex self-center gap-2">
            <button className="btn btn-outline">5</button>
            <button className="btn btn-outline">4</button>
            <button className="btn btn-outline">3</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">1</button>
            <button className="btn btn-outline">With comments</button>
            <button className="btn btn-outline">With media</button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex border-b-2 pb-2 gap-2">
            <div className="">
              <div className="avatar ">
                <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="">User1</div>
              <div className="rating rating-xs">
                <StarIcon className="w-4 h-4 stroke-orange-500 fill-orange-500" />
                <StarIcon className="w-4 h-4 stroke-orange-500 fill-orange-500" />
                <StarIcon className="w-4 h-4 stroke-orange-500 fill-orange-500" />
                <StarIcon className="w-4 h-4 stroke-orange-500" />
                <StarIcon className="w-4 h-4 stroke-orange-500" />
              </div>
              <div className="text-sm">
                2022-11-12 13:21 | Variation: Brown,L
              </div>
              <div className="text-sm font-semibold">
                Fit siya, okay lang naman saken, meant to be fitted naman talaga
                kase and for reference 5 foot 6 inches on height and 57 kg on
                weight. Advice ko lang kung malaki tyan mo waaggg. No
                biggie(^.^)
              </div>
              <div className="flex gap-2">
                <div className="avatar">
                  <div className="w-20 rounded">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-20 rounded">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-20 rounded">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
              <div className="flex mt-2 gap-1">
                <HandThumbUpIcon className="w-5 h-5 " />
                <div className="self-center">66</div>
              </div>
            </div>
          </div>
          <div className="flex self-end place-items-center gap-2">
            <ChevronLeftIcon className="w-5 h-5" />
            <div className="btn-group">
              <button className="btn btn-error">1</button>
              <button className="btn btn-outline btn-error">2</button>
              <button className="btn btn-outline btn-error">3</button>
              <button className="btn btn-outline btn-error">4</button>
            </div>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
