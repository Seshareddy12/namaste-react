import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({ userInfo: json });
  }
  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default User;
