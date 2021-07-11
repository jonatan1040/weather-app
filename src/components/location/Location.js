import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LocationData, GeoLocation } from "../../api/api";
import {
  locationDetail,
  toggleShowError,
  setIconsFolder,
  setLocation,
  setLocationsByName,
} from "../../slices/locationSlice";

function Location() {
  const location = useSelector((state) => state.locations.location);
  const locationDetails = useSelector(
    (state) => state.locations.locationDetail
  );
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );
  const weatherIconsFolder = useSelector(
    (state) => state.locations.weatherIconsFolder
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let lon;
    let lat;
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const promise2 = GeoLocation(lat, lon);
        promise2
          .then((res) => {
            const element = res.data;
            dispatch(setLocation(element));
            dispatch(setLocationsByName([]));
            const promise = LocationData(element.Key);
            promise
              .then((resp) => {
                dispatch(locationDetail(resp.data[0]));
              })
              .catch((err) => {
                dispatch(
                  toggleShowError({
                    toggle: true,
                    title: err.name,
                    message: err.message,
                  })
                );
              });
          })
          .catch((err) => {
            dispatch(
              toggleShowError({
                toggle: true,
                title: err.name,
                message: err.message,
              })
            );
          });
      },
      function (error) {
        dispatch(
          toggleShowError({
            toggle: true,
            title: error.code,
            message: error.message,
          })
        );
      }
    );

    const promise = LocationData(location.Key);
    promise
      .then((res) => {
        dispatch(locationDetail(res.data[0]));
      })
      .catch((err) => {
        dispatch(
          toggleShowError({
            toggle: true,
            title: err.name,
            message: err.message,
          })
        );
      });

    dispatch(setIconsFolder(images));
  }, []);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace(/-s/gi, "").replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../images/weather-icons", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="col">
      {location && locationDetails ? (
        fahrenheitOrcelsius === "celsius" ? (
          <div key={location.LocalizedName} className="row">
            <h1>
              {location.LocalizedName},{location.Country.ID}
            </h1>
            <p>
              {locationDetails.Temperature.Metric.Value}
              {locationDetails.Temperature.Metric.Unit}
            </p>
            <div className="row">
              <h3>{locationDetails ? locationDetails.WeatherText : ""}</h3>
              <img
                src={
                  weatherIconsFolder[`${locationDetails.WeatherIcon}.png`]
                    .default
                }
                alt="weather_icon"
              ></img>
            </div>
          </div>
        ) : (
          <div key={location.LocalizedName} className="row">
            <h1>
              {location.LocalizedName},{location.Country.ID}
            </h1>
            <p>
              {locationDetails.Temperature.Imperial.Value}
              {locationDetails.Temperature.Imperial.Unit}
            </p>
            <div className="row">
              <h3>{locationDetails ? locationDetails.WeatherText : ""}</h3>
              <img
                src={
                  weatherIconsFolder[`${locationDetails.WeatherIcon}.png`]
                    .default
                }
                alt="weather_icon"
              ></img>
            </div>
          </div>
        )
      ) : (
        <div>{""}</div>
      )}
    </div>
  );
}

export default Location;
