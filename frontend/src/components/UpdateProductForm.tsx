import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { iProductFrom } from "./NewProducts";
import { useMutation } from "@tanstack/react-query";
import { usePrivateAxios } from "../hooks/usePrivateAxios";

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  updateProduct: any;
  setUpdateProduct: React.Dispatch<React.SetStateAction<undefined>>;
}

const UpdateProductForm: React.FC<Props> = ({
  isShow,
  setIsShow,
  updateProduct,
  setUpdateProduct,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const shop: any = queryClient.getQueryData(["shop"]);
  const [productImages, setProductImages] = useState<Array<any>>([]);
  const [file, setFile] = useState<Array<any>>([]);
  const api = usePrivateAxios(queryClient, true);

  useEffect(() => {
    updateProduct?.product_images.map((item: any) => {
      setProductImages((prev) => [...prev, item]);
    });

    return () => {
      setProductImages([]);
    };
  }, [updateProduct?.product_images]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<iProductFrom>({
    defaultValues: {
      variations: [
        {
          variant: updateProduct?.product_variation[0]?.variation_name,
          option_1:
            updateProduct?.product_variation[0]?.variation_item[0]
              ?.variation_item_name,
          option_2:
            updateProduct?.product_variation[0]?.variation_item[1]
              ?.variation_item_name,
          option_3:
            updateProduct?.product_variation[0]?.variation_item[2]
              ?.variation_item_name,
          option_4:
            updateProduct?.product_variation[0]?.variation_item[3]
              ?.variation_item_name,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variations",
  });

  let formData = new FormData();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e?.target?.files?.item(0);
    if (!imageFile) return;
    setFile((prev) => [...prev, imageFile]);
  };

  const handleRemoveImage = (item: any) => {
    setFile((prev) =>
      prev.filter((el) => {
        return el !== item;
      })
    );
    setProductImages((prev) =>
      prev.filter((el) => {
        return el !== item;
      })
    );
  };
  const handleaddImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    hiddenFileInput?.current?.click();
  };

  const { mutate } = useMutation({
    mutationFn: async (formdata: any) => {
      const res = await api.put("/products/update", formdata);
      return res.data;
    },
    onSuccess(data) {
      queryClient.invalidateQueries(["seller_products"]);
      reset();
      setFile([]);
      setProductImages([]);
      setIsShow(false);
    },
  });

  const onSubmit = handleSubmit((data) => {
    formData.append("product_id", updateProduct.product_id);
    formData.append("product_name", data.product_name);
    formData.append("category", data.category);
    formData.append("price", data.price.toString());
    formData.append("product_description", data.product_description);
    formData.append("quantity", data.quantity.toString());
    formData.append("shop_id", shop?.shop_id);
    data?.variations?.forEach((item, index) => {
      formData.append(`variations`, JSON.stringify(item));
    });
    file.forEach((item) => {
      formData.append("new_images", item);
    });
    console.log(file);
    productImages.forEach((item) => {
      formData.append("current_images", item);
    });

    mutate(formData);
  });
  return (
    <>
      {/* <button
        onClick={() => setIsShow((prev) => !prev)}
        className="rounded-md bg-orange-600 p-2 text-white hover:bg-orange-700"
      >
        + Add Products
      </button> */}
      {isShow && (
        <div className="shadow-l absolute top-10 z-50 h-screen w-screen">
          <div className="modal-box relative flex w-11/12 max-w-5xl flex-col place-items-center">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">Update Product!</h3>
              <h6 className=" self-center">
                Update some information about the product
              </h6>
            </div>
            <form
              onSubmit={onSubmit}
              encType="mulmultipart/form-data"
              className="flex w-11/12 flex-col gap-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input input-md"
                  {...register("product_name", {
                    value: updateProduct?.product_name,
                    required: "Product Name is required",
                  })}
                />
                <div className="text-red-600">
                  {errors.product_name?.message}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  defaultValue={""}
                  className="select-bordered select"
                  {...register("category", {
                    value:
                      updateProduct?.categories[0]?.category?.category_name,
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
                    value: updateProduct?.price,
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
                    value: updateProduct?.quantity,
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
                  {...register("product_description", {
                    value: updateProduct?.product_description,
                  })}
                ></textarea>
              </div>

              <div className="flex w-full flex-col overflow-auto border-4 border-dashed">
                {fields && <div className="m-2 font-bold">Variations</div>}
                <div className="m-2 flex flex-col gap-5">
                  {fields.map((field, index) => {
                    return (
                      <div
                        key={index}
                        className="m-1 flex flex-col gap-2 border"
                      >
                        <div className="m-5 flex justify-between">
                          <div className="flex gap-2">
                            <label
                              className="text-lg"
                              placeholder="eg color etc"
                            >
                              Variant
                            </label>
                            <input
                              type="text"
                              placeholder="e.g Color"
                              className="rounded-lg border"
                              defaultValue={`${updateProduct?.product_variation[0]?.variation_name}`}
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
                          <label>Option</label>
                          <input
                            type="text"
                            placeholder="eg red etc"
                            className=" rounded-lg border"
                            defaultValue={`${updateProduct?.product_variation[0]?.variation_item[0]?.variation_item_name}`}
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
                            defaultValue={`${updateProduct?.product_variation[0]?.variation_item[1]?.variation_item_name}`}
                            {...register(
                              `variations.${index}.option_2` as const
                            )}
                          />
                          <input
                            type="text"
                            placeholder="eg red etc"
                            className=" rounded-lg border"
                            defaultValue={`${updateProduct?.product_variation[0]?.variation_item[2]?.variation_item_name}`}
                            {...register(
                              `variations.${index}.option_3` as const
                            )}
                          />
                          <input
                            type="text"
                            placeholder="eg red etc"
                            className=" rounded-lg border"
                            defaultValue={`${updateProduct?.product_variation[0]?.variation_item[3]?.variation_item_name}`}
                            {...register(
                              `variations.${index}.option_4` as const
                            )}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (fields.length > 1) return;
                    append({
                      variant: "",
                      option_1: null,
                      option_2: null,
                      option_3: null,
                      option_4: null,
                    });
                  }}
                  hidden={fields.length === 1 && true}
                  className="justify  m-2 h-10 w-max place-self-end  rounded-full border px-3 shadow-xl  hover:shadow-inner active:bg-orange-600"
                >
                  + Enable Variants
                </button>
              </div>
              <div className="flex h-48 flex-col border-4">
                <div className="flex h-32 w-full overflow-auto">
                  {productImages ? (
                    productImages?.map((item: any) => {
                      return (
                        <div key={item}>
                          <div
                            onClick={() => handleRemoveImage(item)}
                            className="cursor-pointer text-red-600"
                          >
                            X
                          </div>
                          <img
                            key={item.product_image_id}
                            src={`http://localhost:8080/${item?.product_image_link}`}
                            alt=""
                            className="m-2 w-32 border hover:scale-105"
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="place-self-center justify-self-center">
                      No Product Image
                    </div>
                  )}
                  {file &&
                    file.map((item: any) => {
                      return (
                        <div key={item}>
                          <div
                            onClick={() => handleRemoveImage(item)}
                            className="cursor-pointer text-red-600"
                          >
                            X
                          </div>
                          <img
                            src={URL.createObjectURL(item)}
                            alt=""
                            className="m-2 w-32 border hover:scale-105"
                          />
                        </div>
                      );
                    })}
                </div>

                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChangeImage}
                  hidden
                  name="images"
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
                <button
                  onClick={() => setIsShow((prev) => !prev)}
                  className="rounded-lg border-2 bg-white py-2 px-9 text-black shadow-xl hover:shadow-inner active:bg-orange-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mr-2 h-10 rounded-lg border-2 border-green-600 bg-green-600 px-3 text-white shadow-2xl  hover:border-green-700 hover:bg-green-700 hover:shadow-inner"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProductForm;
