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
      <div className="m-5 flex flex-col gap-2">
        <div className="text-xl">Product Ratings</div>
        <div className="flex gap-7 bg-orange-50">
          <div className="m-5 flex flex-col">
            <div className="flex gap-2">
              <span className=" text-3xl text-orange-600">{rate}</span>
              <span className="self-center text-orange-600">out of 5</span>
            </div>
            <div className="rating rating-md">
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 fill-orange-500 stroke-orange-500" />
              <StarIcon className="h-8 w-8 stroke-orange-500" />
            </div>
          </div>
          <div className="flex gap-2 self-center">
            <button className="btn-outline btn">5</button>
            <button className="btn-outline btn">4</button>
            <button className="btn-outline btn">3</button>
            <button className="btn-outline btn">2</button>
            <button className="btn-outline btn">1</button>
            <button className="btn-outline btn">With comments</button>
            <button className="btn-outline btn">With media</button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 border-b-2 pb-2">
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
                <StarIcon className="h-4 w-4 fill-orange-500 stroke-orange-500" />
                <StarIcon className="h-4 w-4 fill-orange-500 stroke-orange-500" />
                <StarIcon className="h-4 w-4 fill-orange-500 stroke-orange-500" />
                <StarIcon className="h-4 w-4 stroke-orange-500" />
                <StarIcon className="h-4 w-4 stroke-orange-500" />
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
              <div className="mt-2 flex gap-1">
                <HandThumbUpIcon className="h-5 w-5 " />
                <div className="self-center">66</div>
              </div>
            </div>
          </div>
          <div className="flex place-items-center gap-2 self-end">
            <ChevronLeftIcon className="h-5 w-5" />
            <div className="btn-group">
              <button className="btn border-orange-600 bg-orange-600 hover:border-orange-600 hover:bg-orange-600">
                1
              </button>
              <button className="btn border-orange-600 bg-orange-50 text-orange-600 hover:border-orange-600 hover:bg-orange-600 hover:text-white ">
                2
              </button>
              <button className="hover:text-whiter btn border-orange-600 bg-orange-50 text-orange-600 hover:border-orange-600 hover:bg-orange-600">
                3
              </button>
              <button className="btn border-orange-600 bg-orange-50 text-orange-600 hover:border-orange-600 hover:bg-orange-600 hover:text-white">
                4
              </button>
            </div>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
