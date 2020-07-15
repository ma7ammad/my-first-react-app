//example of using class components in react: not recommended

import React from "react";

class AboutPage extends React.Component {
  //class components require a render function
  render() {
    return (
      <>
        <h2>About</h2>
        <p>Paragraph</p>
      </>
    );
  }
}

export default AboutPage;
