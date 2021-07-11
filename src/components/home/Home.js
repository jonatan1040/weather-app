// import React from "react";
import Search from "../search/Search";
import Location from "../location/Location";
import Wishlist from "../wishlist/Wishlist";
import Forecasts from "../forecasts/Forecasts";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.setTimeout(() => {
      document.querySelector(".intro_image").style.display = "none";
    }, 3001);
  });
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
