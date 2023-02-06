import React, { useRef, useState } from "react";
import CategoriesPanel from "../components/CategoriesPanel";
import ProductsPanel from "../components/ProductsPanel";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery(
    ["products", 1],
    async () => {
      const res = await axios.get("http://localhost:8080/products");
      return res.data;
    },
    {
      refetchOnMount: false,
    }
  );
  return (
    <div className="flex flex-col gap-5">
      <CategoriesPanel />
      <ProductsPanel products={products} isLoading={isLoading} />
      <div className="self-center">
        <button
          onClick={() => {
            navigate("/daily_discover");
          }}
          className="btn-outline btn rounded-none border-gray-400  bg-white px-36 py-1 text-xs hover:border-gray-400 hover:bg-gray-300 hover:text-black"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Home;
