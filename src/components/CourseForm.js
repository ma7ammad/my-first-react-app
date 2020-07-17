import React from "react";
import TextInput from "./common/TextInpt";

function CourseForm(props) {
  return (
    //declaring the 'onSubmit' on the 'form' rather than the 'btn' so that even if user hits the Enter key the form would submit
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title || ""} // if no title passed set to empty string
      />
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>
      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        className="form-control"
        value={props.course.category}
      />{" "}
      <br></br>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
