import React, { Component } from "react";

class PublishDate extends Component {
  constructor(props) {
    super(props);
    this.state = { publishedDate: props.publishedDate };
  }
  render() {
    return <p>{this.state.publishedDate}</p>;
  }
}
export default PublishDate;
