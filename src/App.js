import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import Toolbar from "./components/toolbar/Toolbar";
import Error from "./error-handaling-modal/ErrorModal";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.setTimeout(() => {
      document.querySelector(".intro_image").style.display = "none";
      document.body.style.overflow = "auto";
    }, 3001);
  });
  return (
    <>
      <div className="intro_image"></div>
      <Router>
        <div className="container">
          <Toolbar />
          <Error />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/favorites">
              <div className="m-5">
                <Favorites />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
