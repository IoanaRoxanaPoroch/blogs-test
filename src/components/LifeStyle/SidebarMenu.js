import React, { useState, Component } from "react";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebar: false };
  }
  componentDidMount() {
    this.setState({ sidebar: false });
  }
  handleClick() {
    if (!this.state.sidebar) {
      this.setState({ sidebar: true });
    } else {
      this.setState({ sidebar: false });
    }
  }
  render() {
    return (
      <>
        <div className="bars-icon">
          <Link className="menu-bars">
            <GoThreeBars onClick={() => this.handleClick()} />
          </Link>
        </div>
        <nav className={this.state.sidebar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={() => this.handleClick()}>
            <li className="side-toggle">
              <Link className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.url} className="text-decoration">
                    {item.icon} <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}
export default SidebarMenu;
