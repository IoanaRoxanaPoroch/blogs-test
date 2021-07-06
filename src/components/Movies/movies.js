import React, { Component } from "react";
import SidebarMenu from "../LifeStyle/SidebarMenu";

class movies extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "bcsc" };
  }
  componentDidMount() {
    this.setState({ text: "Looks here for more nice movies" });
  }
  render() {
    return (
      <div>
        <SidebarMenu />
        <h1>Movies page</h1>
        <br />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default movies;
