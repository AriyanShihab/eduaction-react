import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const CourseContext = createContext([]);
export const CartContext = createContext([]);
const Root = () => {
  const { courses, initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  return (
    <CourseContext.Provider value={courses}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </CourseContext.Provider>
  );
};

export default Root;
