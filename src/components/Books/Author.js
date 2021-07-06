import React, { Component } from "react";
import "./Author.css";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = { author: props.name };
  }
  render() {
    return (
      <div>
        <h2 className="authorDetail">By {this.state.author}</h2>
      </div>
    );
  }
}
export default Author;
