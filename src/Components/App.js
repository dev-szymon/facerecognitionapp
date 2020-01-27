import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Logo from "./Logo";
import LinkForm from "./LinkForm";
import Rank from "./Rank";
import OutputPhoto from "./OutputPhoto";
import Clarifai from "clarifai";

// use clarifai.com
const app = new Clarifai.App({
  apiKey: "50536ece57824f77a403adbe048c9402"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      outputPhoto: "",
      box: {}
    };
  }

  calculateBox = data => {
    const clarifyFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const inputimage = document.getElementById("inputimage");
    const width = Number(inputimage.width);
    const height = Number(inputimage.height);
    return {
      topBorder: height * Number(clarifyFace.top_row) + "px",
      leftBorder: width * Number(clarifyFace.left_col) + "px",
      heightFace:
        height *
          (Number(clarifyFace.bottom_row) - Number(clarifyFace.top_row)) +
        "px",
      widthFace:
        width * (Number(clarifyFace.right_col) - Number(clarifyFace.left_col)) +
        "px"
    };
  };

  passStateBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ outputPhoto: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.passStateBox(this.calculateBox(response)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <Nav />
        <div className="container">
          <Rank />
          <LinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <OutputPhoto
            FaceBox={this.state.box}
            imageSrc={this.state.outputPhoto}
          />
        </div>
      </div>
    );
  }
}

export default App;
