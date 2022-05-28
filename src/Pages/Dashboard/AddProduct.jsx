import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: parts, isLoading } = useQuery("parts", () =>
      fetch("http://localhost:5000/parts").then((res) => res.json())
    );
    const imageStorageKey = "8aa1d81e22c82d158472ba2267b0bcb9";
    const onSubmit = async data => {
        const image = data.image[0];
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
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to your database 
                fetch("http://localhost:5000/parts", {
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
        <h2 className="text-2xl">Add a New Doctor</h2>
        <div className="border-2 rounded-md mx-auto md:w-4/5 w-full">
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
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
                <span className="label-text">Parts Option</span>
              </label>
              <select
                {...register("specialty")}
                class="select input-bordered w-full max-w-xs"
              >
                
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
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
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Add Parts"
            />
          </form>
        </div>
      </div>
    );
};

export default AddProduct;

