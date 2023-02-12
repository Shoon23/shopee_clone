import React, { useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";

interface iProductFrom {
  product_name: string;
  category: string;
  price: number;
  quantity: number;
  product_description: string;
  variations: Array<{
    variant: string;
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
  }>;
  images: Array<File>;
}

type Props = {};

const NewProducts: React.FC<Props> = ({}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const [productImages, setProductImages] = useState<Array<Blob | null>>([]);
  const [file, setFile] = useState<Array<File>>([]);
  const api = usePrivateAxios(queryClient);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<iProductFrom>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variations",
  });

  const { mutate } = useMutation({
    mutationFn: async (formData: iProductFrom) => {},
  });

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e?.target?.files?.item(0);
    if (!imageFile) return;
    setFile([...file, imageFile]);
    setProductImages((prev: any) => [...prev, URL.createObjectURL(imageFile)]);
  };
  const handleaddImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    hiddenFileInput?.current?.click();
  };

  const onSubmit = handleSubmit((data) => {
    data.images = file;
  });

  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="rounded-md bg-orange-600 p-2 text-white hover:bg-orange-700"
      >
        + Add Products
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative flex w-11/12 max-w-5xl flex-col place-items-center">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Add New Product!</h3>
            <h6 className="text-sm">Add some information about the product</h6>
          </div>
          <form onSubmit={onSubmit} className="flex w-11/12 flex-col gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input input-md"
                {...register("product_name", {
                  required: "Product Name is required",
                })}
              />
              <div className="text-red-600">{errors.product_name?.message}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue={""}
                className="select-bordered select"
                {...register("category", {
                  required: "Catogory is required",
                })}
              >
                <option disabled value={""}>
                  Pick one
                </option>
                <option>Clothing</option>
                <option>Shoes</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Jewelry</option>
              </select>
              <div className="text-red-600">{errors?.category?.message}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input-bordered input input-md"
                {...register("price", {
                  required: "Price is required",
                })}
              />
              <div className="text-red-600">{errors.price?.message}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input-bordered input input-md"
                {...register("quantity", {
                  required: "Quantity is required",
                })}
              />
              <div className="text-red-600">{errors.quantity?.message}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                className="textarea-bordered textarea h-24 resize-none"
                placeholder="Description"
                {...register("product_description")}
              ></textarea>
            </div>

            <div className="flex w-full flex-col overflow-auto border-4 border-dashed">
              {fields && <div className="m-2 font-bold">Variations</div>}
              <div className="m-2 flex flex-col gap-5">
                {fields.map((field, index) => {
                  return (
                    <div key={index} className="m-1 flex flex-col gap-2 border">
                      <div className="m-5 flex justify-between">
                        <div className="flex gap-2">
                          <label className="text-lg" placeholder="eg color etc">
                            Variant
                          </label>
                          <input
                            type="text"
                            placeholder="e.g Color"
                            className="rounded-lg border"
                            {...register(
                              `variations.${index}.variant` as const,
                              {
                                required: "Variant Required",
                              }
                            )}
                          />
                        </div>

                        <button
                          type="button"
                          className="m-1"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                      <div className="m-5 flex gap-2 ">
                        <label htmlFor="">Option</label>
                        <input
                          type="text"
                          placeholder="eg red etc"
                          className=" rounded-lg border"
                          {...register(
                            `variations.${index}.option_1` as const,
                            {
                              required: "Option Required",
                            }
                          )}
                        />
                        <input
                          type="text"
                          placeholder="eg red etc"
                          className=" rounded-lg border"
                          {...register(`variations.${index}.option_2` as const)}
                        />
                        <input
                          type="text"
                          placeholder="eg red etc"
                          className=" rounded-lg border"
                          {...register(`variations.${index}.option_3` as const)}
                        />
                        <input
                          type="text"
                          placeholder="eg red etc"
                          className=" rounded-lg border"
                          {...register(`variations.${index}.option_4` as const)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (fields.length > 2) return;
                  append({
                    variant: "",
                    option_1: "",
                    option_2: "",
                    option_3: "",
                    option_4: "",
                  });
                }}
                hidden={fields.length === 2 && true}
                className="justify  m-2 h-10 w-max place-self-end  rounded-full border px-3 shadow-xl  hover:shadow-inner active:bg-orange-600"
              >
                + Enable Variants
              </button>
            </div>
            <div className="flex h-48 flex-col border-4">
              <div className="flex h-32 w-full overflow-auto">
                {productImages ? (
                  productImages.map((item: any) => {
                    return (
                      <img
                        src={item}
                        alt=""
                        className="m-2 w-32 border hover:scale-105"
                      />
                    );
                  })
                ) : (
                  <div className="place-self-center justify-self-center">
                    No Product Image
                  </div>
                )}
              </div>

              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChangeImage}
                hidden
                accept="image/*"
              />
              <button
                onClick={handleaddImage}
                className="m-1 h-10 w-max place-self-end rounded-full border px-3 shadow-xl  hover:shadow-inner active:bg-orange-600"
              >
                + Add Photo
              </button>
            </div>

            <div className="flex gap-1 self-end">
              <label
                htmlFor="my-modal-3"
                className="rounded-lg border-2 bg-white py-2 px-9 text-black shadow-xl hover:shadow-inner active:bg-orange-600"
              >
                Cancel
              </label>
              <button className="mr-2 h-10 rounded-lg border-2 border-orange-600 bg-orange-600 px-3 text-white shadow-2xl  hover:border-orange-700 hover:bg-orange-700 hover:shadow-inner">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
function getValues() {
  throw new Error("Function not implemented.");
}