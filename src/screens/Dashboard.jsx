import React, { useState } from "react";
import DashboardCard from "../Components/DashboardCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  let studentCourses = useSelector((state) => state.students.items);
  // console.log(studentCourses)

  return (
    <div className="p-6">
      <h3 className="text-gray-700 text-3xl font-medium">Student Dashboard</h3>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                </tr>
              </thead>
              <tbody className="bg-white">
                {studentCourses.map((courses) => (
                  <DashboardCard key={courses.ID} id={courses.ID} />

                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="space-y-4">
        {courses.map(course => (
          <DashboardCard
            key={course.id}
            course={course}
            onMarkComplete={handleMarkComplete}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
