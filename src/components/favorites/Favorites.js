import React from "react";
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.locations.favorites);

  return favorites.map((element, key) => {
    console.log(element);
  });
}

export default Favorites;
