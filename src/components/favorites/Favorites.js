import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLocation } from "../../slices/locationSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.locations.favorites);
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );
  const weatherIconsFolder = useSelector(
    (state) => state.locations.weatherIconsFolder
  );

  return (
    <Link to="/" className="text-decoration-none text-reset m-5">
      <div className="col">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {favorites.map((element, key) => {
            return fahrenheitOrcelsius === "celsius" ? (
              <div className="col">
                <div
                  key={key}
                  className="card"
                  onClick={() => {
                    dispatch(setLocation(element.location));
                  }}
                >
                  <div class="card-body">
                    <h1 className="card-title">
                      {element.location.LocalizedName},
                      {element.location.Country.ID}
                    </h1>
                    <p className="card-text">
                      {element.locationDetail.Temperature.Metric.Value}
                      {element.locationDetail.Temperature.Metric.Unit}
                    </p>
                    <h3>{element.locationDetail.WeatherText}</h3>
                    <img
                      src={
                        weatherIconsFolder[
                          `${element.locationDetail.WeatherIcon}.png`
                        ].default
                      }
                      alt="weather_icon"
                    ></img>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col">
                <div key={key} className="card">
                  <div class="card-body">
                    <h1 className="card-title">
                      {element.location.LocalizedName},
                      {element.location.Country.ID}
                    </h1>
                    <p className="card-text">
                      {element.locationDetail.Temperature.Imperial.Value}
                      {element.locationDetail.Temperature.Imperial.Unit}
                    </p>
                    <h3>{element.locationDetail.WeatherText}</h3>
                    <img
                      src={
                        weatherIconsFolder[
                          `${element.locationDetail.WeatherIcon}.png`
                        ].default
                      }
                      alt="weather_icon"
                    ></img>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default Favorites;
