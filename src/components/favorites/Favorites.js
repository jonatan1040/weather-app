import React from "react";
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.locations.favorites);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      {favorites.map((element, key) => {
        return (
          <div
            style={{
              whiteSpace: "pre-line",
              border: "1px solid black",
              padding: "20px",
            }}
            key={key}
          >
            <p>
              {element.Temperature.Metric.Value}
              {element.Temperature.Metric.Unit}
            </p>
            <p>{element.WeatherText}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
