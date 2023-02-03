import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProductsPanel from "../components/ProductsPanel";
import { useNavigate } from "react-router-dom";

interface Props {}

const DailyDiscover: React.FC<Props> = ({}) => {
  const [page, setPage] = useState<number>(2);
  const topRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery(
    ["products", page],
    async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [products]);

  return (
    <>
      <div ref={topRef}></div>
      <div className="w-10/12 self-center">
        <div className="flex my-10">
          <div className="flex rounded-lg absolute left-1/2 top-40 text-3xl font-semibold bg-orange-600 text-white w-16 h-16 justify-center place-items-center">
            All
          </div>
          <div className="border-t border-dashed border-black w-full"></div>
        </div>
      </div>
      <ProductsPanel products={products} isLoading={isLoading} />
      <div className="btn-group border-orange-600  self-center shadow-base my-4">
        <button
          disabled={page === 1 && true}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700"
        >
          «
        </button>
        <button className="btn border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700">
          {page}
        </button>

        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            topRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700"
        >
          »
        </button>
      </div>
    </>
  );
};

export default DailyDiscover;
