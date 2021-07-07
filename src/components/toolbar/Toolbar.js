import { Link } from "react-router-dom";

function Toolbar() {
  return (
    <div>
      <h3>Herolo Weather App</h3>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/favorites">Favorites</Link>
      </button>
      {/* <button onclick={}>add</button> */}
    </div>
  );
}

export default Toolbar;
