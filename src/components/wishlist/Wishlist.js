import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites, removeFavorite } from "../../slices/locationSlice";
import heart from "../../images/heart.png";
import heart_red from "../../images/heart-red.png";
import Modal from "../../error-handaling-modal/MyModal";

function Wishlist() {
  const [heartColor, setHeartColor] = useState();
  const [favText, setFavText] = useState();

  const dispatch = useDispatch();

  const location = useSelector((state) => state.locations.location);
  const locationDetail = useSelector((state) => state.locations.locationDetail);
  const favorites = useSelector((state) => state.locations.favorites);

  function addToFavorite() {
    const data = favorites.find((item) => item.location.Key === location.Key);
    if (data === undefined) {
      dispatch(
        setFavorites({ location: location, locationDetail: locationDetail })
      );
    }
  }

  function deleteFromFavorite() {
    const data = favorites.filter((item) => item.location.Key !== location.Key);
    dispatch(removeFavorite(data));
  }

  useEffect(() => {
    let data2 = favorites.find((item) => item.location.Key === location.Key);
    if (data2 === undefined) {
      setHeartColor(heart);
      setFavText("Add to Favorites");
    } else {
      setHeartColor(heart_red);
      setFavText("Remove From Favorites");
    }
  });

  return (
    <div>
      <img
        src={heartColor}
        alt="wishlist"
        style={{
          width: "35px",
          height: "35px",
        }}
      ></img>
      <button
        onClick={() => {
          <Modal
            title={"srhsrhswrhxcbx"}
            msg={"sgshrhrshsrh"}
            saveModalDetails={"ab s432v"}
          />;
          if (heartColor === heart) {
            addToFavorite();
          } else {
            deleteFromFavorite();
          }
        }}
      >
        {favText}
      </button>
    </div>
  );
}

export default Wishlist;
