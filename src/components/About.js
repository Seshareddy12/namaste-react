import React from "react";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>About Us class component</h2>
        <p>This is Namaste React Web Series</p>
        <User />
      </div>
    );
  }
}
export default About;
