import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { category: props.category };
    //console.log("category props", props);
  }
  render() {
    return (
      <div>
        <p className="category"> Category: {this.state.category}</p>
      </div>
    );
  }
}
export default Category;
