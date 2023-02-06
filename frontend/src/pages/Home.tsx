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

  const { data: products, isLoading } = useQuery(["products", 1], async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="flex flex-col gap-5">
      <CategoriesPanel />
      <ProductsPanel products={products} isLoading={isLoading} />
      <div className="self-center">
        <button
          onClick={() => {
            navigate("/daily_discover");
          }}
          className="btn btn-outline"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Home;
