import React, { Component } from "react";
import Entry from "../../images/entry.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { title: " " };
  }
  componentDidMount() {
    this.setState({ title: "Wellcome" });
  }
  render() {
    return (
      <div>
        <Link to="/about">
          <img src={Entry} alt="Wellcome in our world" />
        </Link>
        <p>{this.state.title}</p>
      </div>
    );
  }
}
export default Home;
