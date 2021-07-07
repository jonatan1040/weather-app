import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites, removeFavorite } from "../../slices/locationSlice";
import heart from "../../images/heart.png";

function Wishlist() {
  const [heartColor, setHeartColor] = useState();
  const dispatch = useDispatch();

  const location = useSelector((state) => state.locations.location);
  const locationsByName = useSelector(
    (state) => state.locations.locationsByName
  );
  const locationDetail = useSelector((state) => state.locations.locationDetail);
  const favorites = useSelector((state) => state.locations.favorites);
  console.log("Wishlist location", location);
  console.log("Wishlist locationsByName", locationsByName);
  console.log("Wishlist locationDetail", locationDetail);
  console.log("Wishlist favorites", favorites);

  function addToFavorite() {
    const data = favorites.find(
      (item) => item.EpochTime === locationDetail.EpochTime
    );
    console.log("Wishlist data1", data);
    if (data === undefined) {
      // setHeartColor("red");
      // const data = favorites.filter((item) => item.Key !== location.Key);
      console.log("Wishlist data2", data);
      dispatch(setFavorites(locationDetail));
    }
  }

  function deleteFromFavorite() {
    // setHeartColor("white");
    const data = favorites.filter(
      (item) => item.EpochTime !== locationDetail.EpochTime
    );
    console.log("Wishlist data3", data);
    dispatch(removeFavorite(data));
  }

  useEffect(() => {
    let data2 = favorites.find(
      (item) => item.EpochTime === locationDetail.EpochTime
    );
    if (data2 === undefined) {
      setHeartColor("white");
    } else {
      setHeartColor("red");
    }
  });

  return (
    <div>
      <img
        src={heart}
        alt="wishlist"
        style={{
          width: "35px",
          height: "35px",
          backgroundColor: heartColor,
        }}
      ></img>
      {console.log("heartColor", heartColor)}
      <button
        onClick={() => {
          if (heartColor === "white") {
            addToFavorite();
          } else {
            deleteFromFavorite();
          }
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default Wishlist;
