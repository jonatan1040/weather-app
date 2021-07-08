import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLocation } from "../../slices/locationSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.locations.favorites);
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );

  useEffect(() => {});

  return (
    <Link to="/">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        {favorites.map((element, key) => {
          return fahrenheitOrcelsius === "celsius" ? (
            <div
              style={{
                whiteSpace: "pre-line",
                border: "1px solid black",
                padding: "20px",
              }}
              key={key}
              onClick={() => {
                dispatch(setLocation(element.location));
                console.log(element.location);
              }}
            >
              <h3>{element.location.LocalizedName}</h3>
              <h3>{element.location.Country.ID}</h3>
              <p>
                {element.locationDetail.Temperature.Metric.Value}
                {element.locationDetail.Temperature.Metric.Unit}
              </p>
              <p>{element.locationDetail.WeatherText}</p>
            </div>
          ) : (
            <div
              style={{
                whiteSpace: "pre-line",
                border: "1px solid black",
                padding: "20px",
              }}
              key={key}
            >
              <h3>{element.location.LocalizedName}</h3>
              <p>
                {element.locationDetail.Temperature.Imperial.Value}
                {element.locationDetail.Temperature.Imperial.Unit}
              </p>
              <p>{element.locationDetail.WeatherText}</p>
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default Favorites;
