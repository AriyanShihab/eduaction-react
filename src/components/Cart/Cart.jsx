import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteShoppingCart, removeFromDb } from "../../utils/fakeDb";
import { CartContext } from "../Root/Roots";
import SingleCart from "../SingleCart/SingleCart";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const removedFromCart = (cartCourse) => {
    const otherCourse = cart.filter((ct) => cartCourse.id !== ct.id);
    setCart(otherCourse);
    removeFromDb(cartCourse.id);
    toast.warning("Course Removed", { autoClose: 500, theme: "dark" });
  };
  const placeOrder = () => {
    setCart([]);
    deleteShoppingCart();
    toast.success("Order Placed", { autoClose: 500, theme: "dark" });
  };

  let totall = 0;
  cart.forEach((ct) => {
    totall = totall + ct.price * ct.quantity;
  });

  return (
    <div className="bg-slate-900 min-h-screen items-center pt-[10vh]  p-2">
      <div className=" md:w-3/4 mx-auto p-2 rounded ">
        <div>
          {cart.map((ct) => (
            <SingleCart
              key={ct.id}
              cart={ct}
              removedFromCart={removedFromCart}
            ></SingleCart>
          ))}
        </div>
        {cart.length ? (
          <div className="text-right pr-4">
            <h2 className="text-slate-100 text-xl font-bold">
              Totall Price: {totall}
            </h2>
            <button
              onClick={placeOrder}
              className="px-4 py-2 rounded bg-cyan-500 text-gray-800 font-bold "
            >
              Place Order
            </button>
          </div>
        ) : (
          <div className="text-center  bg-slate-800 p-10 mt-5 rouded">
            <h2 className="text-4xl text-cyan-500 my-2 font-bold">
              Your Cart is Empty, Please Buy Some{" "}
              <Link className="text-indigo-500" to={"/courses"}>
                Courses
              </Link>
            </h2>
            <Link to={"/courses"}>
              <button className="px-4 py-2 rounded bg-cyan-500 text-gray-800 font-bold ">
                Courses
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
