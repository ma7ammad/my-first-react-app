import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path `/courses/:slug`
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

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

  function formIsValid() {
    //declaring errors as an object (!array) for ease of access in the CourseFrom
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "AuthorId is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    //Form is valid if error object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    //prevent page from posting back to the server
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      //user landed on this page via React-Router =>
      //can access props.history to go to the previous 'courses' page
      props.history.push("/courses");
      toast.success("Course saved successfully");
    });
  }
  return (
    <>
      <h2>Manage Course</h2>
      {/*passing props of entered course properties above into CourseForm*/}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
