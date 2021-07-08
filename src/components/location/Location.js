import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LocationData, GeoLocation } from "../../api/api";
import { locationDetail } from "../../slices/locationSlice";

function Location() {
  const location = useSelector((state) => state.locations.location);
  const locationDetails = useSelector(
    (state) => state.locations.locationDetail
  );
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // let lon;
    // let lat;
    // navigator.geolocation.getCurrentPosition(
    //   function (position) {
    //     lon = position.coords.longitude;
    //     lat = position.coords.latitude;
    //     console.log("Latitude is :", lat);
    //     console.log("Longitude is :", lon);
    //   },
    //   function (error) {
    //     console.error("Error Code = " + error.code + " - " + error.message);
    //   }
    // );

    // const promise2 = GeoLocation(lat, lon);
    // promise2
    //   .then((res) => {
    //     console.log("HERHERHERHREHRE", res.data);
    //     // dispatch(setLocation(res.data[0]));
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    const promise = LocationData(location.Key);
    promise
      .then((res) => {
        dispatch(locationDetail(res.data[0]));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <div>
        {location && locationDetails ? (
          fahrenheitOrcelsius === "celsius" ? (
            <div>
              <h3>{location.LocalizedName}</h3>
              <p>
                {locationDetails.Temperature.Metric.Value}
                {locationDetails.Temperature.Metric.Unit}
              </p>
            </div>
          ) : (
            <div>
              <h3>{location.LocalizedName}</h3>
              <p>
                {locationDetails.Temperature.Imperial.Value}
                {locationDetails.Temperature.Imperial.Unit}
              </p>
            </div>
          )
        ) : (
          <p>
            {/* {console.log("location", location)} */}
            {/* {console.log("locationDetail", locationDetails)} */}
          </p>
        )}
        <h1>{locationDetails ? locationDetails.WeatherText : ""}</h1>
        {console.log("locationDetails", locationDetails)}
        {console.log("location", location)}
      </div>
    </div>
  );
}

export default Location;
