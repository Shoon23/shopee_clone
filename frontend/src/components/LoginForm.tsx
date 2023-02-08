import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { apiClient } from "../lib/apiClient";
import { useLocation } from "react-router-dom";
import { CurrencyBangladeshiIcon } from "@heroicons/react/24/outline";

interface Props {}

interface iLoginForm {
  email: string;
  password: string;
}

const LoginForm: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const pathName = location.state?.prevPath || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>();

  const { mutate } = useMutation({
    mutationFn: async (formData: iLoginForm) => {
      const res = await apiClient.post("/auth/login", formData);
      return res.data;
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData(["user"], data);
      navigate(pathName);
    },
    onError(error) {
      console.log(error);
    },
  });
  return (
    <div className="flex h-max w-96 flex-col place-items-center gap-2 self-center rounded-md bg-white p-5 shadow-2xl">
      <div className="m-2 self-start">
        <p className="text-2xl">Login</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          mutate(data);
        })}
        action=""
        className="flex w-80 flex-col gap-2"
      >
        <input
          type="email"
          placeholder="Email"
          className="input-bordered input "
          {...register("email", { required: "Email is required" })}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <input
          type="password"
          placeholder="Password"
          className="input-bordered input"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password should be at least 8 characters",
            },
          })}
        />
        <div className="text-red-600">{errors.password?.message}</div>

        <button className="btn w-full max-w-xs border-orange-500 bg-orange-500 hover:border-orange-600 hover:bg-orange-600">
          Login
        </button>
      </form>

      <div className="text-sm">Forgot Password?</div>

      <div className="relative flex w-full items-center py-1">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 flex-shrink text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex gap-5">
        <button className=" btn-outline btn w-36 hover:bg-gray-100 hover:text-black">
          Facebook
        </button>
        <button className="btn-outline btn w-36 hover:bg-gray-100 hover:text-black">
          Google
        </button>
      </div>

      <div className="flex gap-1 py-1">
        <p className="text-zinc-400">New to Shopee?</p>
        <Link to={"/auth/signup"} className="text-orange-600">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
