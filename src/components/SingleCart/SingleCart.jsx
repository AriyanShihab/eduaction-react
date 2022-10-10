import React from "react";

const SingleCart = ({ cart, removedFromCart }) => {
  const { name, image, description, quantity, price } = cart;
  return (
    <div className="m-3">
      <div className="flex flex-col items-start bg-gray-900 border border-gray-100 border-opacity-20 rounded-lg  shadow-md md:flex-row ">
        <img
          className="rounded-t-lg md:h-auto md:w-[300px] w-full object-cover  md:rounded-none md:rounded-l-lg h-full"
          src={image}
          alt=""
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 ">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-200 ">
            {`${description?.slice(0, 160)} ...`}
          </p>
          <div className="flex justify-between  bg-slate-800 p-2 rounded my-2">
            <div className="">
              <p className="font-bold text-gray-200">Price: {price}</p>
            </div>
            <div>
              <p className="font-bold text-cyan-400">Quantity: {quantity}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-xl text-cyan-500">
                Totall Price: {price * quantity}$
              </p>
            </div>
            <div>
              <button
                onClick={() => removedFromCart(cart)}
                className="bg-cyan-500 text-gray-900 px-4 py-2 rounded font-bold"
              >
                Removed from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
