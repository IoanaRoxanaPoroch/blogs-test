import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }
  render() {
    return (
      <div>
        <h1 className="title">{this.state.title}</h1>
      </div>
    );
  }
}
export default Title;
