import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: parts, isLoading } = useQuery("parts", () =>
      fetch("https://pc-parts-co.herokuapp.com/parts").then((res) => res.json())
    );
    const imageStorageKey = "8aa1d81e22c82d158472ba2267b0bcb9";
    const onSubmit = async data => {
        const image = data.image;
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const parts = {
                  name: data.name,
                  price: data.price,
                  max_quantity: data.max_quantity,
                  min_quantity: data.min_quantity,
                  img: img,
                  desc: data.desc
                };
                // send to your database 
                fetch("https://pc-parts-co.herokuapp.com/parts", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                  body: JSON.stringify(parts),
                })
                  .then((res) => res.json())
                  .then((inserted) => {
                    if (inserted.insertedId) {
                      toast.success("Parts added successfully");
                      reset();
                    } else {
                      toast.error("Failed to add the Parts");
                    }
                  });

            }
            
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
      <div>
        <h2 className="text-2xl">Add a New Product</h2>
        <div className="border-2 rounded-md mx-4 w-11/12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Product price"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required",
                  },
                  
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Max Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Max Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("max_quantity", {
                  required: {
                    value: true,
                    message: "Max Quantity is Required",
                  },
                  
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Min Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Min Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("min_quantity", {
                  required: {
                    value: true,
                    message: "Min Quantity is Required",
                  },
                  
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description.."
                className="input input-bordered w-full max-w-xs"
                {...register("desc", {
                  required: {
                    value: true,
                    message: "Desc.. is Required",
                  },
                  
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("img", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs btn-outline btn-primary "
              type="submit"
              value="Add Parts"
            />
          </form>
        </div>
      </div>
    );
};

export default AddProduct;

