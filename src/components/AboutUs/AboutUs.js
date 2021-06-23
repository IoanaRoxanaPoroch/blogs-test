import React, { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { textBody: " " };
  }
  componentDidMount() {
    this.setState({
      textBody:
        "Our mysterious story begin a long time ago, in the  Est Europe, on the Dracula realm... ",
    });
  }
  render() {
    return (
      <div>
        <h1>Wellcome to Lilibeth story!</h1>
        <br></br>
        <p>{this.state.textBody}</p>
      </div>
    );
  }
}

export default AboutUs;
