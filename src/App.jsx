import { useEffect, useState } from "react";
import "./App.css";
import CourseCard from "./Components/CourseCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  let [search, setSearch] = useState('')
  let data = useSelector((state) => state.items.filter((course) => course.Name.toLowerCase().includes(search.toLowerCase()) || course.Instructor.toLowerCase().includes(search.toLowerCase()) || course.Description.toLowerCase().includes(search.toLowerCase()) ? true : false));
  // let [data, setData] = useState([]);
  // async function currentdataloader() {
  //   let res = await fetch(44
  //     "https://script.googleusercontent.com/macros/echo?user_content_key=B5X1HO5DERFyMrZXHBo7r1PMCCEvn26fKpR1q4vd15XKdW4psW5Dz9GBzl7y_x5ATmHbNagBRHJ2YxxHqNBeAhSrvb846H8wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO8gW8Ryu_EpSRV3oEPB6KY43a1gZ1sR9w4y9CYlfZACp9uriirmNeLpUFXjrLO2WFqylRiHr0BHdKCDwDfCQli1VjAfR0-Njtz9Jw9Md8uu&lib=ML6cQJZZXtQy6LFk7-U5jScDBrwaeO73j"
  //   );
  //   let dataa = await res.json();

  //   if (dataa) {
  //     setData(dataa.data);
  //     console.log(dataa);
  //   }
  // }

  // useEffect(() => {
  //   currentdataloader();
  // }, []);
  return (
    <>
      <form className="max-w-screen-md mx-auto m-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Courses"
            required=""
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-wrap justify-center">
        {data.map((course) => (
          <NavLink key={course.ID} to={`/courses/${course.ID}`}>
            <CourseCard
              key={course.ID}
              name={course.Name}
              des={course.Description}
              instructor={course.Instructor}
              thumbnail={course.Thumbnail}
            />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default App;
