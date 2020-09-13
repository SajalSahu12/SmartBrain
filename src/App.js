import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Register from "./Components/Register/Register";
import Face from "./Components/Face/Face";
import Logo from "./Components/Logo/Logo";
import SearchBar from "./Components/Searchbar/SearchBar";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import SignIn from "./Components/SignIn/SignIn";

const app = new Clarifai.App({
  apiKey: "0fb57b44a5984665a1c5267c062b5475"
});

const ParticlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageurl: "",
      box: {},
      route: "SignIn",
      isSignedIn: false
    };
  }

  CalculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input image");
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  FaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onClickChange = () => {
    this.setState({ imageurl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.FaceBox(this.CalculateFaceLocation(response)))
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if(route==="Signout"){
      this.setState({isSignedIn: false})
    }else if (route==="home"){
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
    
  };

  render() {
    return (
      <div className="App ">
        <Particles className="particles" params={ParticlesOption} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <SearchBar
              onInputChange={this.onInputChange}
              onClickChange={this.onClickChange}
            />
            <Face box={this.state.box} imageurl={this.state.imageurl} />
          </div>
        ) : (
          (this.state.route === "SignIn" ? (
            <SignIn onRouteChange={this.onRouteChange} />
          ) : (
            <Register onRouteChange={this.onRouteChange} />
          ))
        )}
      </div>
    );
  }
}

export default App;
