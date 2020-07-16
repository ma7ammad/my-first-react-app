//example of using function components in react
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Course Administration</h1>
      <p>React, React Router for ultra-responsive web apps</p>
      {/*<a href="/about">About</a>*/}
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
