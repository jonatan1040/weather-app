import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocationsByName,
  setForecasts,
  setLocation,
  locationDetail,
} from "../../slices/locationSlice";
import { SearchData, LocationData, getForecasts } from "../../api/api";

function Search() {
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
      .catch((e) => {});
  }

  function selectCity(element) {
    dispatch(setLocation(element));
    dispatch(setLocationsByName([]));
    const promise = LocationData(element.Key);
    promise
      .then((res) => {
        dispatch(locationDetail(res.data[0]));
        _getForecasts(element);
      })
      .catch((e) => {});
  }

  function _getForecasts(element) {
    const promise = getForecasts(element.Key);
    promise
      .then((res) => {
        console.log(res);
        dispatch(setForecasts(res.data));
      })
      .catch((e) => {});
  }

  return (
    <div>
      <div>
        <label for="location_input">Enter Location: </label>
        <input
          type="text"
          id="location_input"
          name="location_input_name"
          placeholder={defaultLocation}
          onChange={(e) => FetchCitiesByString(e.target.value)}
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
