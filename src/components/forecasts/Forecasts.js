import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getForecasts } from "../../api/api";
import { setForecasts } from "../../slices/locationSlice";

function getDayAndTemperature(element) {
  const dateString = element.Date.split("T")[0];
  const d = new Date(dateString);
  const weekday = d.toString().split(" ")[0];
  const temperature =
    Math.abs(
      Math.round(
        element.Temperature.Maximum.Value + element.Temperature.Minimum.Value
      )
    ) / 2;
  return { weekday, temperature, unit: element.Temperature.Maximum.Unit };
}

function Forecasts() {
  const forecasts = useSelector((state) => state.locations.forecasts);
  const location = useSelector((state) => state.locations.location);
  const dispatch = useDispatch();

  let weeklyForcast = [];

  useEffect(() => {
    const promise = getForecasts(location.Key);
    promise
      .then((res) => {
        dispatch(setForecasts(res.data.DailyForecasts));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      {forecasts
        ? forecasts.map((element, key) => {
            const dayForecast = getDayAndTemperature(element);
            weeklyForcast.push(dayForecast);
            return (
              <div
                style={{
                  whiteSpace: "pre-line",
                  border: "1px solid black",
                  padding: "20px",
                }}
                key={key}
              >
                <div>
                  {dayForecast.weekday} {dayForecast.temperature}
                  {dayForecast.unit}
                </div>
              </div>
            );
          })
        : console.log("mf")}
    </div>
  );
}

export default Forecasts;
