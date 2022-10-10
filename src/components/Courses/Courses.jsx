import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { addToDb } from "../../utils/fakeDb";
import Course from "../Course/Course";
import { CartContext, CourseContext } from "../Root/Roots";

const Courses = () => {
  const courses = useContext(CourseContext);
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  const handelAddTocart = (course) => {
    let newCart = [];
    const exist = cart.find((oldCourse) => oldCourse.id === course.id);
    if (!exist) {
      course.quantity = 1;
      newCart = [...cart, course];
    } else {
      const rest = cart.filter((oldCourse) => oldCourse.id !== course.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(course.id);
    toast.success("Course Added", { autoClose: 500, theme: "dark" });
  };
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 md:w-3/4 mx-auto py-20 px-4 ">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handelAddTocart={handelAddTocart}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
