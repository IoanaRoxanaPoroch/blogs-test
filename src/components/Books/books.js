import React, { Component } from "react";
import LifeStyle from "../LifeStyle/SidebarMenu";
import axios from "axios";
import "./books.css";
//import Modal from "./Modal";
import { Link } from "react-router-dom";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      articles: [],
      display: false,
      title: "",
      categories: [],
      publishedDate: 0,
    };
  }

  //
  componentDidMount() {
    console.log("aciiiiiii");
    //I.3
    // this.setState({ title: "Abracadaba", author: "G.M." });
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
      .then((response) => {
        console.log("resp", response.data);
        this.setState({
          nr: response.data.totalItems,
          articles: [...response.data.items],
        });
      })
      .catch(function (error) {
        console.error("err", error);
      });
  }

  // openModal(item) {
  // console.log("item param", item);
  // this.setState({
  // display: true,
  // title: item.volumeInfo.title,
  // categories: [item.volumeInfo.categories],
  // publishedDate: item.volumeInfo.publishedDate,
  // });
  // console.log("open", this.state);
  // }

  render() {
    //I.2 //outputs the HTML to the DOM
    return (
      <>
        <div>
          <LifeStyle />
          <h1>Recomandation of books</h1>
          <br />
        </div>
        <div>
          {this.state.articles.map((item) => (
            <>
              <div className="artDesign">
                <img
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt=""
                  className="image"
                />
                <div className="text">
                  {item.volumeInfo.description}{" "}
                  <Link
                    to={{
                      pathname: "/details",
                      state: {
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors,
                        category: item.volumeInfo.categories,
                        description: item.volumeInfo.description,
                        publishedDate: item.volumeInfo.publishedDate,
                        image: item.volumeInfo.imageLinks.smallThumbnail
                      },
                    }}
                    className="details"
                  >
                    More details...
                  </Link>
                </div>
                <div className="author bottomRight">
                  by {item.volumeInfo.authors}
                </div>
              </div>
            </>
          ))}
        </div>
        {/* {this.state.display && (
          <Modal
            display={this.state.display}
            title={this.state.title}
            categories={this.state.categories}
            publishedDate={this.state.publishedDate}
          ></Modal>
       )} */}
      </>
    );
  }
}

export default Books;

// updating = any change in the component's state or props
