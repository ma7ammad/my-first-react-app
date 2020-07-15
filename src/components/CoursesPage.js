import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  //
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []); // declaring an empty dependency array to say this should only run once
  // otherwise getCourses above will keep calling  setCourses infinitely
  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              // key to resolve Warning: Each child in a list should have a unique "key" prop.
              <tr key={course.id}>
                <th>{course.title}</th>
                <th>{course.authorId}</th>
                <th>{course.category}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
