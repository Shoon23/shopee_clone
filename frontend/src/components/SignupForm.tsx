import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";

interface Props {}

interface iRegisterForm {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
}

const SignupForm: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (formData: iRegisterForm) => {
      try {
        const res = await apiClient.post("/auth/signup", formData);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData(["user"], data);
      navigate("/");
    },
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iRegisterForm>();
  return (
    <div className="bg-white w-96 self-center flex shadow-2xl rounded-md flex-col place-items-center gap-2 p-5">
      <div className="self-start m-2">
        <p className="text-2xl">Sign Up</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          mutate(data);
        })}
        className="flex flex-col gap-1 w-80"
      >
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered"
          {...register("email", {
            required: "email is required",
          })}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <div className="flex gap-1 ">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="first Name"
              className="input input-bordered w-36"
              {...register("first_name", {
                required: "required",
              })}
            />
            <div className="text-red-600 w-40">
              {errors.first_name?.message}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="last name"
              className="input input-bordered  w-40"
              {...register("last_name", {
                required: "required",
              })}
            />
            <div className="text-red-600 w-40">{errors.last_name?.message}</div>
          </div>
        </div>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          {...register("password", {
            required: "Passwrod is missing",
            minLength: {
              value: 4,
              message: "Password should be at least 8 characters",
            },
          })}
        />
        <div className="text-red-600">{errors.password?.message}</div>

        <input
          type="password"
          placeholder="confirm password"
          className="input input-bordered"
          {...register("confirm_password", {
            required: "Password is missing",
            validate: {
              passwordEqual: (value) =>
                value === getValues().password || "Password not matched",
            },
            minLength: {
              value: 4,
              message: "Password should be at least 8 characters",
            },
          })}
        />
        <div className="text-red-600">{errors.confirm_password?.message}</div>

        <button className="btn w-full max-w-xs bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600">
          Next
        </button>
      </form>
      <div className="relative flex py-5 items-center w-full">
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
      <div className="text-xs w-56 m-2">
        By signing up, you agree to Shopee's Terms of Service & Privacy Policy
      </div>
      <div className="flex gap-1">
        <p className="text-zinc-400">Have an account?</p>
        <Link to={"/auth/login"} className="text-orange-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
