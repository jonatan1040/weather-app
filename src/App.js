import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import Toolbar from "./components/toolbar/Toolbar";
import Error from "./error-handaling-modal/ErrorModal";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <div class="row"> */}
        <Toolbar />
        {/* </div> */}
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
  );
}

export default App;
