import React, { Component } from "react";
import LifeStyle from "../LifeStyle/Lifestyle";

class movies extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "bcsc" };
  }
  componentDidMount() {
    this.setState({ text: "Looks here for more nice movies" });
  }
  render() {
    return (
      <div>
        <h1>Movies page</h1>
        <p>{this.state.text}</p>
        <LifeStyle />
      </div>
    );
  }
}
export default movies;
