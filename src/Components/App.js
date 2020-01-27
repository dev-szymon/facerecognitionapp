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
      box: null
    };
  }

  calculateBox = data =>
    data.outputs[0].data.regions.map(r => r.region_info.bounding_box);

  passStateBoxes = array => {
    this.setState({ box: array });
    console.log(this.state.box);
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  multipleFaces = faces => {
    const inputimage = document.getElementById("inputimage");
    const width = Number(inputimage.width);
    const height = Number(inputimage.height);
    faces.forEach(b => {
      return {
        topBorder: height * Number(b.top_row) + "px",
        leftBorder: width * Number(b.left_col) + "px",
        heightFace: height * (Number(b.bottom_row) - Number(b.top_row)) + "px",
        widthFace: width * (Number(b.right_col) - Number(b.left_col)) + "px"
      };
    });
  };

  onButtonSubmit = () => {
    this.setState({ outputPhoto: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.passStateBoxes(this.multipleFaces(this.calculateBox(response)));
      })
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
            FaceBoxes={this.state.box}
            imageSrc={this.state.outputPhoto}
          />
        </div>
      </div>
    );
  }
}

export default App;
