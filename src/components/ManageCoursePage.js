import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

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

  function handleSubmit(event) {
    //prevent page from posting back to the server
    event.preventDefault();
    courseApi.saveCourse(course);
    //user landed on this page via React-Router =>
    //can access props.history to go to the previous 'courses' page
    props.history.push("/courses");
    toast.success("Course saved successfully");
  }
  return (
    <>
      <h2>Manage Course</h2>
      {/*passing props of entered course properties above into CourseForm*/}
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
