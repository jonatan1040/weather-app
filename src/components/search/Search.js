import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocationsByName,
  setLocation,
  locationDetail,
  toggleShowError,
} from "../../slices/locationSlice";
import { SearchData, LocationData } from "../../api/api";

function Search() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const defaultLocation = useSelector(
    (state) => state.locations.location.LocalizedName
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
        dispatch(
          toggleShowError({
            toggle: true,
            title: err.name,
            message: err.message,
          })
        );
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
        dispatch(
          toggleShowError({
            toggle: true,
            title: err.name,
            message: err.message,
          })
        );
      });
  }

  return (
    <div className="row m-5">
      <div>
        <input
          className="form-control me-2"
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
  );
}

export default Search;
