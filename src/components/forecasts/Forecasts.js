import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getForecasts } from "../../api/api";
import { setForecasts, toggleShowError } from "../../slices/locationSlice";

function getDayAndTemperature(element) {
  const dateString = element.Date.split("T")[0];
  const d = new Date(dateString);
  const weekday = d.toString().split(" ")[0];
  const avgTemperature =
    Math.abs(
      Math.round(
        element.Temperature.Maximum.Value + element.Temperature.Minimum.Value
      )
    ) / 2;
  return { weekday, avgTemperature, unit: element.Temperature.Maximum.Unit };
}

function Forecasts() {
  const forecasts = useSelector((state) => state.locations.forecasts);
  const location = useSelector((state) => state.locations.location);
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );
  const weatherIconsFolder = useSelector(
    (state) => state.locations.weatherIconsFolder
  );
  const dispatch = useDispatch();

  let weeklyForcast = [];
  let metric = true;
  fahrenheitOrcelsius !== "celsius" ? (metric = false) : (metric = true);

  useEffect(() => {
    const promise = getForecasts(location.Key, metric);
    promise
      .then((res) => {
        dispatch(setForecasts(res.data.DailyForecasts));
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
  }, [fahrenheitOrcelsius]);

  return (
    <div className="col col-sm-6 text-center">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {forecasts
          ? forecasts.map((element, key) => {
              const dayForecast = getDayAndTemperature(element);
              weeklyForcast.push(dayForecast);
              return (
                <div className="col">
                  <div key={key} className="card">
                    <div className="card-body">
                      <div className="row forcast_title">
                        <div className="col">
                          <div className="row">
                            <div className="col">
                              <h3 className="card-title">
                                {dayForecast.weekday}
                              </h3>
                            </div>
                            <div className="col">
                              <h3 className="card-text">
                                {dayForecast.avgTemperature}
                                {dayForecast.unit}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <img
                            src={
                              weatherIconsFolder[`${element.Day.Icon}.png`]
                                .default
                            }
                            alt="weather_icon"
                          ></img>
                        </div>
                      </div>

                      <div className="row forcast_divider">
                        <div className="col">
                          <h4>Day</h4>
                          <h5 className="col">{element.Day.IconPhrase}</h5>
                          <img
                            className="col"
                            src={
                              weatherIconsFolder[`${element.Day.Icon}.png`]
                                .default
                            }
                            alt="weather_icon"
                          ></img>
                        </div>
                        <div className="col">
                          <h4>Night</h4>
                          <h5 className="col">{element.Night.IconPhrase}</h5>
                          <img
                            className="col"
                            src={
                              weatherIconsFolder[`${element.Night.Icon}.png`]
                                .default
                            }
                            alt="weather_icon"
                          ></img>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div>
                            {element.Temperature.Maximum.Value}
                            {element.Temperature.Maximum.Unit}
                          </div>
                        </div>
                        <div className="col">
                          <div>
                            {element.Temperature.Minimum.Value}
                            {element.Temperature.Minimum.Unit}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Forecasts;
