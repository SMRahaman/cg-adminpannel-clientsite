import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProductAdd = () => {
  let percent = [];
  for (let i = 1; i <= 100; i++) {
    percent.push(i);
  }
  const { register, handleSubmit } = useForm();
  const productAddHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="grow p-8">
      <h2 className="text-2xl mb-4">Product Add</h2>
      <form onSubmit={handleSubmit(productAddHandler)}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5 mb-5 ">
          <div className="flex flex-col gap-2">
            <span className="text-white">Product Name</span>
            <input
              {...register("productName")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Product Category</span>
            <input
              {...register("productCategory")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Product Quantity</span>
            <input
              {...register("productQuantity")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg text-black"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <span className="text-white">Product buy price</span>
            <input
              {...register("productBuyPrice")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Product sell price</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Product offer (Percentage)</span>
            <select
              {...register("productOffer")}
              name=""
              id=""
              className="input input-bordered w-full max-w-xs md:max- text-black"
            >
              <option>Select product offer</option>
              <option>no offer</option>
              {percent.map((num) => (
                <option>{num}%</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <span className="text-white">Offer Price</span>
            <input
              {...register("offerPrice")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Product Camping</span>
            <select
              {...register("productCamping")}
              name=""
              id=""
              className="input input-bordered w-full max-w-xs md:max- text-black"
            >
              <option>Select product camping</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Profit</span>
            <input
              {...register("profit")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mb-5">
            <span className="text-white">Product Image</span>
            <input
              {...register("productImage")}
              type="file"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mb-5">
            <span className="text-white">Product Details</span>
            <textarea
              {...register("productDescription")}
              placeholder="Type here"
              className="input input-bordered w-full text-black h-[150px]"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Product Description</span>
            <textarea
              {...register("productDescription")}
              placeholder="Type here"
              className="input input-bordered w-full text-black h-[150px]"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary text-lg w-1/2 mt-8">
            Product Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
