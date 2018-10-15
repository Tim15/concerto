import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Project from "./components/Project/Project";
import Projects from "./components/Projects/Projects";
import SystemInfo from "./components/SystemInfo/SystemInfo";

const electron = window.require("electron"); // little trick to import electron in react
const ipcRenderer = electron.ipcRenderer;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateReady: false
    };
    ipcRenderer.on("updateReady", (event, text) => {
      this.setState({ updateReady: true });
    });
  }

  render() {
    return (
      <Router>
        <div className="router-page">
          <Route exact path="/" component={LandingPage} />
          <Route path="/app" component={Home} />
          <Route path="/systeminfo" component={SystemInfo} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:projectID" component={Project} />
        </div>
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </Router>
    );
  }
}

export default App;
