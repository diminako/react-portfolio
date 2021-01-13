import React, { Component } from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import './App.css';
import NeatSplash from "./Components/NeatSplash";

const style = {
  backgroundDiv: {
    minHeight: "100vh",
    background: "darkGrey",
    // backgroundImage: `url("/rain.jpg")`,
    // backgroundSize: 'cover',
    noRepeat: '-99999px -9999px',
    display: "flex",
    flexDirection: "column"
  }
}

const App = () => {


  return (
    <Router>
      <Header />
      <div className="App" style={style.backgroundDiv}>
      <Route exact path="/" component={Home} />
      <Route exact path="/AboutMe" component={AboutMe} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
      <div className="mainContent">
        <NeatSplash />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
