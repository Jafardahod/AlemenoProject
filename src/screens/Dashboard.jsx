import React, { useState } from 'react';

const Dashboard = () => {
  // Sample course data
  const initialCourses = [
    {
      id: 1,
      name: 'React Basics',
      instructor: 'John Doe',
      thumbnail: 'https://via.placeholder.com/150',
      dueDate: '2024-10-01',
      progress: 80,
      completed: false,
    },
    {
      id: 2,
      name: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      thumbnail: 'https://via.placeholder.com/150',
      dueDate: '2024-09-15',
      progress: 60,
      completed: false,
    },
  ];

  const [courses, setCourses] = useState(initialCourses);

  const markAsCompleted = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, progress: 100, completed: true } : course
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
          >
            <img
              src={course.thumbnail}
              alt={`${course.name} Thumbnail`}
              className="w-32 h-32 rounded-lg"
            />
            <div className="ml-6 flex-1">
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-gray-600">Due Date: {course.dueDate}</p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              {course.completed ? (
                <p className="text-green-600 mt-2">Completed</p>
              ) : (
                <button
                  onClick={() => markAsCompleted(course.id)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
