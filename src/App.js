import React, { Component } from "react";
import Header from "./Components/Header";
import Separation from "./Components/Separation"
import InfoProfile from "./Components/InfoProfile";
import AboutMe from "./Components/AboutMe";
import PortfolioSect from "./Components/PortfolioSect";
import NeatSplash from "./Components/NeatSplash";
import backgroundVii from "./Components/images/backgroundVii.jpg";
import './App.css';

const style = {
  backgroundDiv: {
    minHeight: "100vh",
    backgroundImage: "url(" + { backgroundVii } + ")"
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      change: []
    }
  }



  render() {

    return (
      <div className="App">
        <div style={style.backgroundDiv}>
        <Header />
        <NeatSplash />
        <InfoProfile />
        <Separation />
        <PortfolioSect />
        <AboutMe />
        </div>
      </div>
    );
  }
}

export default App;
