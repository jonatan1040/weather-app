import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LocationData } from "../../api/api";
import { locationDetail } from "../../slices/locationSlice";

function Location() {
  const location = useSelector((state) => state.locations.location);
  const locationDetails = useSelector(
    (state) => state.locations.locationDetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const promise = LocationData(location.Key);
    promise
      .then((res) => {
        // console.log("HERERHHERH", res.data[0]);
        dispatch(locationDetail(res.data[0]));
        // console.log("HERERHHERH22222222222222222", locationDetails);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <div>
        {location && locationDetails ? (
          <p>
            {location.LocalizedName}
            {locationDetails.Temperature.Metric.Value}
            {locationDetails.Temperature.Metric.Unit}
          </p>
        ) : (
          <p>
            {/* {console.log("location", location)} */}
            {/* {console.log("locationDetail", locationDetails)} */}
          </p>
        )}
        <h1>{locationDetails ? locationDetails.WeatherText : ""}</h1>
      </div>
    </div>
  );
}

export default Location;
