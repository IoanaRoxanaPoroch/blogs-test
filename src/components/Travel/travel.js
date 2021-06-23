import React, { Component } from "react";
import LifeStyle from "../LifeStyle/Lifestyle";

class travel extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "", images: "" };
  }
  componentDidMount() {
    this.setState({ location: "Mauritius" });
  }
  render() {
    return (
      <div>
        <h1>Travel page</h1>
        <p>First recomandation is {this.state.location}</p>
        <LifeStyle />
      </div>
    );
  }
}
export default travel;
