/*
A Template object for the CourseForm with error handling
*/
import React from "react";
import Prototypes from "prop-types";
function TextInput(props) {
  let wrapperClass = "form-group";
  //   if (props.error && props.error.length > 0) {
  if (props.error.length > 0) {
    wrapperClass += "has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          onChange={props.onChange}
          className="form-control"
          value={props.value} // if no title passed set to empty string
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.Prototypes = {
  id: Prototypes.string.isRequired,
  name: Prototypes.string.isRequired,
  label: Prototypes.string.isRequired,
  onChange: Prototypes.func.isRequired,
  value: Prototypes.string,
  error: Prototypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;