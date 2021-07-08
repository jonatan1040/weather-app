import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setfahrenheitOrcelsius } from "../../slices/locationSlice";

function Toolbar() {
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Herolo Weather App</h3>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/favorites">Favorites</Link>
      </button>
      <button
        onClick={() => {
          dispatch(setfahrenheitOrcelsius());
        }}
      >
        F/C
      </button>
    </div>
  );
}

export default Toolbar;
