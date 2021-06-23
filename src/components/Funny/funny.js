import React, { Component } from "react";

class Funny extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  componentDidMount() {
    this.setState({
      text: "If you want to have a nice experience with o piece of romanian jokes, please let me tell you some like this ....",
    });
  }
  render() {
    return (
      <div>
        <h1>It's funny time</h1>
        <br />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default Funny;
