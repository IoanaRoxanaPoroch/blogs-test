import React, { Component } from "react";
import SidebarMenu from "../LifeStyle/SidebarMenu";

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
          <SidebarMenu />
        <h1>Travel page</h1>
        <p>First recomandation is {this.state.location}</p>
      </div>
    );
  }
}
export default travel;
