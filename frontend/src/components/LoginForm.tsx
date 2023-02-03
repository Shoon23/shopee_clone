import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Props {}

interface iLoginForm {
  email: string;
  password: string;
}

const LoginForm: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>();

  const { mutate } = useMutation({
    mutationFn: async (formData: iLoginForm) => {
      try {
        const res = await axios.post(
          "http://localhost:8080/auth/login",
          formData
        );

        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData(["user"], data);
      navigate("/");
    },
  });
  return (
    <div className="bg-white w-96 h-max self-center flex shadow-2xl rounded-md flex-col place-items-center gap-2 p-5">
      <div className="self-start m-2">
        <p className="text-2xl">Login</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          mutate(data);
        })}
        action=""
        className="flex flex-col gap-2 w-80"
      >
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered "
          {...register("email", { required: "Email is required" })}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password should be at least 8 characters",
            },
          })}
        />
        <div className="text-red-600">{errors.password?.message}</div>

        <button className="btn w-full max-w-xs bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600">
          Login
        </button>
      </form>

      <div className="text-sm">Forgot Password?</div>

      <div className="relative flex py-1 items-center w-full">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex gap-5">
        <button className=" btn btn-outline hover:bg-gray-100 hover:text-black w-36">
          Facebook
        </button>
        <button className="btn btn-outline hover:bg-gray-100 hover:text-black w-36">
          Google
        </button>
      </div>

      <div className="flex py-1 gap-1">
        <p className="text-zinc-400">New to Shopee?</p>
        <Link to={"/auth/signup"} className="text-orange-600">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
