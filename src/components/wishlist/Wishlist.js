import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../../slices/locationSlice";
import heart from "../../images/heart.png";

function Wishlist() {
  const [heartColor, setHeartColor] = useState("white");
  const dispatch = useDispatch();

  const location = useSelector((state) => state.locations.location);
  const locationsByName = useSelector(
    (state) => state.locations.locationsByName
  );
  const locationDetail = useSelector((state) => state.locations.locationDetail);
  const favorites = useSelector((state) => state.locations.favorites);
  console.log("location", location);
  console.log("locationsByName", locationsByName);
  console.log("locationDetail", locationDetail);
  console.log("favorites", favorites);

  function addToFavorite() {
    const data = favorites.find((item) => item.Key === location.Key);
    console.log("data1", data);
    if (data === undefined) {
      const data = favorites.filter((item) => item.Key !== location.Key);
      console.log("data2", data);
      dispatch(setFavorites(data));
    }
  }

  function deleteFromFavorite() {
    const data = favorites.filter((item) => item.Key !== location.Key);
    console.log("data2", data);
    dispatch(setFavorites(data));
  }

  return (
    <div>
      <img
        src={heart}
        alt="wishlist"
        style={{ width: "35px", height: "35px", backgroundColor: heartColor }}
      ></img>
      <button
        onClick={() => {
          if (heartColor === "white") {
            setHeartColor("red");
            addToFavorite();
          } else {
            setHeartColor("white");
            // deleteFromFavorite();
          }
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default Wishlist;
