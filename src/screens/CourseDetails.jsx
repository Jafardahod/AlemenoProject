import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLikes } from "../features/dataSlice";

function CourseDetails() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let [liked, setliked] = useState(true);
  const [expandedWeek, setExpandedWeek] = useState(null);

  const toggleWeek = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  let course = useSelector(
    (state) =>
      state.items.filter((course) => (course.ID == id ? true : false))[0]
  );

  function likeshandler() {
    setliked((e) => {
      return !e;
    });
    dispatch(updateLikes({ id, liked }));
  }
  return (
    <>
      {course ? (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex justify-center lg:justify-end">
                <img
                  src={course.Thumbnail}
                  alt={course.Name}
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  {course.Name}
                </h2>
                <p className="text-lg text-gray-700 mb-2">
                  <span className="font-semibold">Instructor:</span>{" "}
                  {course.Instructor}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-semibold">Enrollment Status:</span>{" "}
                  <span
                    className={`${
                      course["Enrollment Status"] === "Open"
                        ? "text-green-600"
                        : "text-red-600"
                    } font-semibold`}
                  >
                    {course["Enrollment Status"]}
                  </span>
                </p>
                <p className="text-gray-600 mb-6">{course.Description}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition duration-300">
                    Enroll Now
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md shadow hover:bg-indigo-50 transition duration-300">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Duration
                </h3>
                <p className="text-gray-600">{course.Duration}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Schedule
                </h3>
                <p className="text-gray-600">{course.Schedule}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Location
                </h3>
                <p className="text-gray-600">{course.Location}</p>
              </div>
              <button
                onClick={likeshandler}
                className="bg-white p-6 rounded-lg shadow flex items-center"
              >
                <svg
                  className={`w-6 h-6 ${liked ? 'text-red-200' : 'text-red-500'}  mr-2`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 
              3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
              3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z"
                  />
                </svg>
                <span className="text-gray-600 text-lg">
                  {course.Likes} Likes
                </span>
              </button>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Prerequisites
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {course.Prerequisites.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Syllabus
              </h3>
              <div className="space-y-6">
                {course.Syllabus.map((week) => (
                  <div
                    key={week.week}
                    className="bg-white p-4  rounded-lg shadow"
                  >
                    <div
                      onClick={() => toggleWeek(week.week)}
                      className="cursor-pointer flex justify-between items-center"
                    >
                      <h4 className="text-xl font-semibold text-gray-800 text-center flex-1">
                        Week {week.week}: {week.topic}
                      </h4>
                      <span className="text-gray-600">
                        {expandedWeek === week.week ? "-" : "+"}
                      </span>
                    </div>
                    {expandedWeek === week.week && (
                      <div className="mt-2">
                        <p className="text-gray-600">{week.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Students Enrolled
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {course.Students.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white p-4 rounded-lg shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold mr-4">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        {student.name}
                      </p>
                      <p className="text-gray-600 text-sm">{student.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default CourseDetails;
