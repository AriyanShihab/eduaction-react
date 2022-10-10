import About from "../components/About/About";
import Cart from "../components/Cart/Cart.jsx";
import Course from "../components/Course/Course.jsx";
import Courses from "../components/Courses/Courses.jsx";
import Home from "../components/Home/Home.jsx";
import Root from "../components/Root/Roots.jsx";
import { getCartAndCourseData } from "../loaders/loader";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: getCartAndCourseData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "course",
        element: <Course></Course>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
