import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
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
  );
}

//ProtoTypes validations run only in Dev but not prod, & logs errors
CourseList.prototypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
