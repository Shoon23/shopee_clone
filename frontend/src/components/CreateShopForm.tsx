import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";
import { useQueryClient } from "@tanstack/react-query";

interface Props {}

interface iShopForm {
  shop_name: string;
  user_id: string;
}

const CreateShopForm: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();
  const user: any = queryClient.getQueryData(["user"]);
  const api = usePrivateAxios(queryClient);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<boolean>(false);
  const [shopName, setShopName] = useState<string>("");

  const path = location.state.prevPath || "/seller/products";

  const { mutate, isLoading } = useMutation({
    mutationFn: async (formData: iShopForm) => {
      console.log(formData);
      const res = await api.post("/seller/create_shop", formData);
      return res.data;
    },
    onSuccess(data) {
      queryClient.setQueryData(["shop"], data);
      navigate(path);
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!shopName) {
      setError((prev) => !prev);
    }
    mutate({ shop_name: shopName, user_id: user.user_id });
  };

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="flex h-screen content-center items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 rounded-md bg-white py-20 px-24 shadow-lg"
      >
        <div className="flex flex-col place-items-center">
          <ShoppingBagIcon className="h-20 w-20 self-center stroke-orange-600" />
          <p className="text-2xl">Shopee Seller</p>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Shop Name</span>
          </label>
          <input
            onChange={(e) => setShopName(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full max-w-xs"
          />

          {error && <p className="mt-1 text-red-600">Shop Name required</p>}
        </div>
        <button
          type="submit"
          className="rounded-lg bg-orange-600 p-3 text-white hover:bg-orange-700"
        >
          Create Shop
        </button>
      </form>
    </div>
  );
};

export default CreateShopForm;
