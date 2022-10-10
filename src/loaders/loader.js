import { getStoredCart } from "../utils/fakeDb";

export const getCartAndCourseData = async () => {
  const courseData = await fetch("education.json");
  const courses = await courseData.json();
  const savedCart = getStoredCart();

  console.log(savedCart);
  let initialCart = [];

  for (const id in savedCart) {
    const exitingCourse = courses.find(
      (course) => parseFloat(course.id) === parseFloat(id)
    );
    console.log(exitingCourse);

    if (exitingCourse) {
      const quantity = savedCart[id];
      exitingCourse.quantity = quantity;
      initialCart.push(exitingCourse);
    }
  }

  return { courses, initialCart };
};

// const getFeturedCourse = async () => {
//   const courseData = await fetch("education.json");
//   const courses = await courseData.json();
//   const fetured = courses.filter((course) => course.fetured);
//   return fetured;
// };

// export { getCartAndCourseData, getFeturedCourse };
