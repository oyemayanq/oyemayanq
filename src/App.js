import "./styles/app.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/pageutils/Nav";
import Main from "./components/pages/Main";
import Photos from "./components/pages/Photos";
import Projects from "./components/pages/Projects";
import Articles from "./components/pages/Articles";

const App = () => {
  return (
    <HashRouter basename="/">
      <div>
        <Nav />
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/projects" component={Projects} />
          <Route path="/photos" component={Photos} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
