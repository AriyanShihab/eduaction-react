import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Fetured from "../Feturd/Fetured";
import { CourseContext } from "../Root/Roots";

const Home = () => {
  const courses = useContext(CourseContext);
  const fetured = courses.filter((course) => course.fetured);

  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-slate-900 ">
        <div className="mx-auto md:w-4/5 md:px-2 px-5 grid md:grid-cols-2  grid-cols-1 items-center gap-4">
          <div className="">
            <h2 className="font-black text-4xl text-slate-200">
              Learn To be <span className="text-indigo-500">Best </span>in The
              World
            </h2>
            <p className="mb-4 text-slate-100 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolor nihil temporibus totam perferendis, maxime nostrum
              cupiditate molestiae dignissimos earum!
            </p>
            <div>
              <button className="px-6 py-3 rounded-full bg-indigo-500 font-bold text-white m-1 hover:bg-slate-800 hover:text-indigo-500 border border-indigo-500">
                <Link to={"/courses"}>See Courses</Link>
              </button>
              <button className="px-6 py-3 rounded-full border border-indigo-500 font-bold text-indigo-500 m-1 hover:bg-indigo-500 hover:text-white ">
                <Link to={"/cart"}>Veiw Cart</Link>
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://wellern.vercel.app/assets/images/hero/hero-right.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* fetured courses */}

      <div className="pt-20 bg-slate-900 pb-10">
        <div className="md:w-3/4 mx-auto p-3">
          <h2 className="font-bold text-3xl text-cyan-500 my-3">
            Fetured Courses
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {fetured.map((course) => (
              <Fetured key={course.id} course={course}></Fetured>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
