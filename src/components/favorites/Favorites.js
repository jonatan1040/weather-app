import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLocation } from "../../slices/locationSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.locations.favorites);
  const fahrenheitOrcelsius = useSelector(
    (state) => state.locations.fahrenheitOrcelsius
  );

  // useEffect(() => {});

  return (
    <Link to="/" className="text-decoration-none text-reset m-5">
      <div
        className="col"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-evenly",
        //   flexDirection: "row",
        // }}
      >
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {favorites.map((element, key) => {
            return fahrenheitOrcelsius === "celsius" ? (
              <div className="col">
                <div
                  // style={{
                  //   whiteSpace: "pre-line",
                  //   border: "1px solid black",
                  //   padding: "20px",
                  // }}
                  key={key}
                  className="card"
                  onClick={() => {
                    dispatch(setLocation(element.location));
                    console.log(element.location);
                  }}
                >
                  <div class="card-body">
                    <h3 className="card-title">
                      {element.location.LocalizedName}
                    </h3>
                    <h3>{element.location.Country.ID}</h3>
                    <p className="card-text">
                      {element.locationDetail.Temperature.Metric.Value}
                      {element.locationDetail.Temperature.Metric.Unit}
                    </p>
                    <p>{element.locationDetail.WeatherText}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col">
                <div
                  // style={{
                  //   whiteSpace: "pre-line",
                  //   border: "1px solid black",
                  //   padding: "20px",
                  // }}
                  key={key}
                  className="card"
                >
                  <div class="card-body">
                    <h3 className="card-title">
                      {element.location.LocalizedName}
                    </h3>
                    <p className="card-text">
                      {element.locationDetail.Temperature.Imperial.Value}
                      {element.locationDetail.Temperature.Imperial.Unit}
                    </p>
                    <p>{element.locationDetail.WeatherText}</p>
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
