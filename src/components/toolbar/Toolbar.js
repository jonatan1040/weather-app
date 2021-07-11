import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setfahrenheitOrcelsius } from "../../slices/locationSlice";

function Toolbar() {
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );
  const dispatch = useDispatch();

  return (
    <div className="row m-5">
      <div className="col col-sm-4">
        <h3>Herolo Weather App</h3>
      </div>
      <div className="col col-sm">
        <button className="col">
          <Link to="/" className="text-decoration-none text-reset">
            Home
          </Link>
        </button>
        <button className="col">
          <Link to="/favorites" className="text-decoration-none text-reset">
            Favorites
          </Link>
        </button>
      </div>
      <div className="col text-end">
        <button
          className="col"
          onClick={() => {
            dispatch(setfahrenheitOrcelsius());
          }}
        >
          {fahrenheitOrcelsius === "celsius" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
