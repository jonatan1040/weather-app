import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getForecasts } from "../../api/api";
import { setForecasts } from "../../slices/locationSlice";

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
  const location = useSelector((state) => state.locations.location);
  const dispatch = useDispatch();

  let days = [];

  useEffect(() => {
    const promise = getForecasts(location.Key);
    console.log("herer55555555");
    promise
      .then((res) => {
        console.log("HERERHHERH33333333", res.data.DailyForecasts);
        dispatch(setForecasts(res.data.DailyForecasts));
        console.log("HERERHHERH44444444444", forecasts);
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
      {console.log("forecasts", forecasts)}
      {forecasts
        ? forecasts.map((element, key) => {
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
                  return element.map((temperature) => {
                    return <div>{temperature}</div>;
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
