import React, { Component } from "react";
import ReactModal from "react-modal";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      display: props.display,
      title: props.title,
      categories: props.categories,
      publishedDate: props.publishedDate,
    };
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    ReactModal.setAppElement("#test");
    
    this.setState({
      display: nextProps.display,
      title: nextProps.title,
      categories: nextProps.categories,
    });
  }

  closeModal() {
    this.setState({ display: false });
  }
  render() {
    return (
      <div id="test">
        <ReactModal
          isOpen={this.state.display}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.state.display}
        >
          <div>
            <h1>Title: {this.state.title}</h1>
            <br />
            <h3>Categorie: {this.state.categories}</h3>
            <h4>Date of Publish: {this.state.publishedDate}</h4>
          </div>
          <br />
          <br />
          <button className="closeBtn" onClick={() => this.closeModal()}>
            Close
          </button>
        </ReactModal>
      </div>
    );
  }
}
export default Modal;
