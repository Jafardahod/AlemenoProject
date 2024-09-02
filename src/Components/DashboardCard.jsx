import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentProgress } from "../features/studentSlice";
const DashboardCard = ({ id }) => {
  let studentCourses = useSelector((state) => state.students.items.filter((courses) => courses.ID == id ? true : false)[0]);
  let dispatch = useDispatch();
  let handlemarkasComplete = () => {
    dispatch(updateStudentProgress({ id }));
  };

  useEffect(() => {
    console.log(studentCourses.Progress);
  })
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b flex justify-center border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={studentCourses.Thumbnail} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                {studentCourses.Course}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{studentCourses.Instructor}</div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${studentCourses.Progress < 100 ? 'bg-green-100 text-purple-800' : 'bg-purple-100 text-green-800'} `}>
            {studentCourses.Status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
          {studentCourses.DueDate}
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          <div className="w-full bg-gray-200 m-7 rounded-full h-3 mb-4">
            <div
              className={`${
                studentCourses.Progress < 100 ? "bg-blue-500" : "bg-green-800"
              }  rounded-full text-center text-white text-xs`}
              style={{ width: `${studentCourses.Progress}%` }}
            >
              Progress: {studentCourses.Progress}%
            </div>
          </div>
          {true && (
            <button
              onClick={handlemarkasComplete}
              className="bg-green-500 mb-2 text-white ml-20 py-1 px-3 rounded hover:bg-green-600"
            >
              Mark as Completed
            </button>
          )}
        </td>
      </tr>
    </>
    // <div className={`flex border rounded-lg p-4 mb-4 ${completed ? 'bg-green-100' : 'bg-white'} shadow-md`}>
    //   <img src={course.thumbnail} alt={course.name} className="w-32 h-20 object-cover mr-4 rounded-md" />
    //   <div className="flex-1">
    //     <h3 className="text-lg font-semibold mb-1">{course.name}</h3>
    //     <p className="text-gray-700 mb-1">Instructor: {course.instructor}</p>
    //     <p className="text-gray-700 mb-1">Due Date: {course.dueDate}</p>
    //     <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
    //       <div
    //         className="bg-green-500 h-full rounded-full text-center text-white text-xs"
    //         style={{ width: `${course.progress}%` }}
    //       >
    //         {course.progress}%
    //       </div>
    //     </div>
    //     {!completed && (
    //       <button
    //         onClick={handleMarkComplete}
    //         className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
    //       >
    //         Mark as Completed
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
};

export default DashboardCard;
