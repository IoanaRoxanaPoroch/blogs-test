import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", phoneNr: "" };
  }
  componentDidMount() {
    this.setState({
      email: "lilibeth's@blog@gmail.com",
      phoneNr: "003921518715",
    });
  }
  render() {
    return (
      <div>
        <p>
          You can contact us at:
          <ul>
            <li>
              email address:
              <span className="email">{this.state.email}</span>
            </li>
            <li>telephone: {this.state.phoneNr}</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Contact;
