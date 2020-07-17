import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  const pluralsightBaseUrl = "https://www.pluralsight.com/courses/";
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Pluralsight Link</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            // key to resolve Warning: Each child in a list should have a unique "key" prop.
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                {/* atarget= blank + rel= noopener to open link in new tab */}
                <a
                  href={pluralsightBaseUrl + course.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {course.title} on Pluralsight
                </a>
              </td>
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
