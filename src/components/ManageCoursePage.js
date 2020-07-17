import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  // function handleChange(event) {
  function handleChange({ target }) {
    const updatedCourse = {
      ...course,
      // [event.target.name]: event.target.value,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }
  // //destructuring
  // function handleChange({ target }) {
  //   setCourse({
  //     ...course,
  //     // [event.target.name]: event.target.value,
  //     [target.name]: target.value,
  //   });
  // }

  return (
    <>
      <h2>Manage Course</h2>
      {/*passing props of entered course properties above into CourseForm*/}
      <CourseForm course={course} onChange={handleChange} />
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
