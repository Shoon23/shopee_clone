import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProductsPanel from "../components/ProductsPanel";
import { useNavigate } from "react-router-dom";

interface Props {}

const DailyDiscover: React.FC<Props> = ({}) => {
  const [page, setPage] = useState<number>(2);
  const topRef = useRef<HTMLDivElement>(null);

  const { data: products, isLoading } = useQuery(
    ["products", page],
    async () => {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      return res.data;
    },
    {
      refetchOnMount: false,
    }
  );
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [products]);

  return (
    <>
      <div ref={topRef}></div>
      <div className="w-10/12 self-center">
        <div className="my-10 flex">
          <div className="absolute left-1/2 top-40 flex h-16 w-16 place-items-center justify-center rounded-lg bg-orange-600 text-3xl font-semibold text-white">
            All
          </div>
          <div className="w-full border-t border-dashed border-black"></div>
        </div>
      </div>
      <ProductsPanel products={products} isLoading={isLoading} />
      <div className="shadow-base btn-group  my-4 self-center border-orange-600">
        <button
          disabled={page === 1 && true}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn border-orange-600 bg-orange-600 hover:border-orange-700 hover:bg-orange-700"
        >
          «
        </button>
        <button className="btn border-orange-600 bg-orange-600 hover:border-orange-700 hover:bg-orange-700">
          {page}
        </button>

        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            topRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn border-orange-600 bg-orange-600 hover:border-orange-700 hover:bg-orange-700"
        >
          »
        </button>
      </div>
    </>
  );
};

export default DailyDiscover;
