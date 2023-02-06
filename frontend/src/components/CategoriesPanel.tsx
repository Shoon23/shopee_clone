import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface Props {}

const CategoriesPanel: React.FC<Props> = ({}) => {
  const { data, isLoading } = useQuery(["categories"], async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    return res.data;
  });

  return (
    <>
      <div className="bg-white h-max w-10/12 self-center flex flex-col pt-1 mt-2 justify-between shadow-xl">
        <div className="m-2 pb-2 pt-2 text-zinc-500">CATEGORIES</div>
        <div className="flex place-items-center gap-2 m-2 shadow-sm self-center">
          {isLoading ? (
            <div>Loading..</div>
          ) : (
            data.map((item: string) => (
              <div
                key={item}
                className="w-56 hover:shadow-xl border hover:border-none"
              >
                <img src="" alt="" />
                <div className="text-center">{item}</div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-10/12 bg-white  text-orange-600 text-2xl p-5 self-center">
        Daily Discover
      </div>
    </>
  );
};

export default CategoriesPanel;
