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
    background: "linear-gradient(202deg, #00917c, #dfe0df)",
    backgroundSize: "400% 400%",
    backgroundSize: 'cover',
    noRepeat: '-99999px -9999px',
    display: "flex",
    flexDirection: "column"
//   }
}
}

const App = () => {


  return (
      <div className="App" style={style.backgroundDiv}>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <div className="mainContent">
        <NeatSplash />
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
