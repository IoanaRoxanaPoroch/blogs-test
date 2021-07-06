import React, { Component } from "react";
import "./books.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { description: props.description };
  }
  render() {
    return <p className="description">{this.state.description}</p>;
  }
}
export default Description;
