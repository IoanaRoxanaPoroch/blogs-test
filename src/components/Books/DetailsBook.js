import React, { Component } from "react";
import BackBtn from "../LifeStyle/Back";
import Title from "../Books/Title";
import Author from "../Books/Author";
import Category from "../Books/Category";
import Image from "./Image";
import Description from "./Description";
import PublishDate from "./PublishDate";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.location.state.title,
      author: props.location.state.author,
      category: props.location.state.category,
      description: props.location.state.description,
      publishedDate: props.location.state.publishedDate,
      image: props.location.state.image,
    };
    console.log("props details", props.location.state);
  }
  render() {
    return (
      <>
        <div>
          <BackBtn />
        </div>
        <div>
          <Title title={this.state.title}></Title>
          <Image image={this.state.image} />
          <Author name={this.state.author}></Author>
          <Category category={this.state.category}></Category>
          <Description description={this.state.description} />
          <PublishDate publishedDate={this.state.publishedDate} />
        </div>
      </>
    );
  }
}

export default Details;
