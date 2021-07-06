import React, { Component } from "react";
import "./Image.css";
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { image: props.image };
    console.log("image", props);
  }
  render() {
    return (
      <div>
        <img src={this.state.image} alt="" className="imageDetail" />
      </div>
    );
  }
}
export default Image;
