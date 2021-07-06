import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";

function App() {
  return (
    <Router>
      <div className="App">
        <h3>Herolo Weather App</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">{/* <Favorites /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
