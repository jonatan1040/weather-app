import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocationsByName,
  setLocation,
  locationDetail,
} from "../../slices/locationSlice";
import { SearchData, LocationData } from "../../api/api";

function Search() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const defaultLocation = useSelector(
    (state) => state.locations.defaultLocation
  );

  const locationsByName = useSelector(
    (state) => state.locations.locationsByName
  );

  function FetchCitiesByString(q) {
    const promise = SearchData(q);
    promise
      .then((res) => {
        dispatch(setLocationsByName(res.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function selectCity(element) {
    dispatch(setLocation(element));
    dispatch(setLocationsByName([]));
    const promise = LocationData(element.Key);
    promise
      .then((res) => {
        dispatch(locationDetail(res.data[0]));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div>
      <div>
        <label for="location_input">Enter Location: </label>
        <input
          type="text"
          id="location_input"
          name="location_input_name"
          value={value}
          placeholder={defaultLocation}
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/gi, "");
            setValue(value);
            FetchCitiesByString(value);
          }}
        ></input>
      </div>
      <div>
        {locationsByName.map((element, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                selectCity(element);
              }}
            >
              {element["LocalizedName"]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
