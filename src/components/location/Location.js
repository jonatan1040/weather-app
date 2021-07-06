import React from "react";
import { useSelector } from "react-redux";

function Location() {
  const location = useSelector((state) => state.locations.location);
  const locationDetail = useSelector((state) => state.locations.locationDetail);

  return (
    <div>
      <div>
        {location && locationDetail ? (
          <p>
            {location.LocalizedName}
            {locationDetail.Temperature.Metric.Value}
            {locationDetail.Temperature.Metric.Unit}
          </p>
        ) : (
          <p>{console.log("locationDetail", locationDetail)}</p>
        )}
        <h1>{locationDetail ? locationDetail.WeatherText : ""}</h1>
      </div>
    </div>
  );
}

export default Location;
