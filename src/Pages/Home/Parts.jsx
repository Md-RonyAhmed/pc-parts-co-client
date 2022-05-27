import React from "react";

const Parts = ({ parts }) => {
  const { _id, name, desc, img, price ,max_quantity,min_quantity} = parts;
  return (
    <>
      <div className="md:flex flex-col p-5 rounded-lg shadow-lg max-w-sm mt-6">
        <h2 className="mb-2 font-bold text-xl text-center text-blue-500 bg-blue-50 p-2 rounded-lg">
          {name}
        </h2>
        <img className="rounded-lg md:h-fit mb-4" src={img} alt="" />
        <div className="mb-4 flex flex-wrap flex-col">
          <p className="text-gray-700 text-base mb-4">
            Price: <span className="text-orange-600 text-lg">${price} / item</span>
          </p>
          <p className="text-gray-700 text-base mb-4">
            Maximum Order: {max_quantity}{" "}
          </p>
          <p className="text-gray-700 text-base mb-4">
            Minimum Order:
            <span className="bg-slate-200 py-1 px-4 ml-2 text-orange-600 rounded-full">
              {min_quantity }
            </span>{" "}
          </p>
        </div>
        <p className="text-gray-700 text-base mb-4">{desc}</p>
        <div className="flex flex-wrap mt-auto pt-3 text-xs">
          <button
            //  onClick={() => navigateToInventoryDetail(_id)}
            type="button"
            className="block w-full btn btn-primary btn-outline"
          >
            PURCHASE NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Parts;
