import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import Toolbar from "./components/toolbar/Toolbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
