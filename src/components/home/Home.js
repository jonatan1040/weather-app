import React from "react";
import Search from "../search/Search";
import Location from "../location/Location";
import Wishlist from "../wishlist/Wishlist";
import Forecasts from "../forecasts/Forecasts";

function Home() {
  return (
    <>
      <Search />
      <div className="row m-5">
        <Location />
        <Wishlist />
        <Forecasts />
      </div>
    </>
  );
}

export default Home;
