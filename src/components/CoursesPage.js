import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

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
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>{" "}
      {/*passing courses to props */}
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
