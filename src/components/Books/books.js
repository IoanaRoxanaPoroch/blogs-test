import React, { Component } from "react";
import LifeStyle from "../LifeStyle/SidebarMenu";
import axios from "axios";
import "./books.css";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "La vie en rose", author: "", nr: 0, articles: [] };
  }

  //
  componentDidMount() {
    //I.3
    // this.setState({ title: "Abracadaba", author: "G.M." });
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
      .then((response) => {
        console.log("resp", response.data);
        this.setState({
          title: "Abracadabra",
          author: "G.M.",
          nr: response.data.totalItems,
          articles: [...response.data.items],
        });
        console.log(this.state);
      })
      .catch(function (error) {
        console.error("err", error);
      });
  }
  render() {
    //I.2 //outputs the HTML to the DOM
    return (
      <>
        <div>
          <LifeStyle />
          <h1>Recomandation of books</h1>
          <h2>
            First book is {this.state.title} by {this.state.author}{" "}
          </h2>{" "}
          <br />
          <p>
            {this.state.articles.map((item) => (
              <ul>
                <li className="desText">{item.volumeInfo.description}</li>
              </ul>
            ))}
          </p>
        </div>
      </>
    );
  }
}

export default Books;

// updating = any change in the component's state or props
