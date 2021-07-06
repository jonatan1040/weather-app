import React from "react";
import { useSelector } from "react-redux";

function getDayAndTemperature(element) {
  let dateString = element.Date.split("T")[0];
  let d = new Date(dateString);
  let dayName = d.toString().split(" ")[0];
  let temperature =
    Math.abs(
      Math.round(
        element.Temperature.Maximum.Value + element.Temperature.Minimum.Value
      )
    ) / 2;
  return [dayName, temperature, element.Temperature.Maximum.Unit];
}

function Forecasts() {
  const forecasts = useSelector((state) => state.locations.forecasts);
  let days = [];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      {console.log("forecasts", forecasts)}
      {forecasts
        ? forecasts.DailyForecasts.map((element, key) => {
            console.log("elementimpo", element);
            days = [...days, getDayAndTemperature(element)];
            console.log("days", days);
            return (
              <div
                style={{
                  whiteSpace: "pre-line",
                  border: "1px solid black",
                  padding: "20px",
                }}
                key={key}
              >
                {days.map((element) => {
                  console.log(element);
                  element.map((temperature) => {
                    <div>{temperature}</div>;
                  });
                })}
              </div>
            );
          })
        : console.log("mf")}
    </div>
  );
}

export default Forecasts;
