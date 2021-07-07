import React from "react";
import Search from "../search/Search";
import Location from "../location/Location";
import Wishlist from "../wishlist/Wishlist";
import Forecasts from "../forecasts/Forecasts";

function Home() {
  return (
    <div>
      <Search />
      <Location />
      <Wishlist />
      <Forecasts />
    </div>
  );
}

export default Home;
