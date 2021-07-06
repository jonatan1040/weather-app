import React, { useEffect } from "react";
import Search from "../search/Search";
import Location from "../location/Location";
import Forecasts from "../forecasts/Forecasts";
import { LocationData } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.locations.location);
  const locationDetail = useSelector((state) => state.locations.locationDetail);

  // canShowLocation();

  useEffect(() => {
    const promise = LocationData(location.Key);
    promise
      .then((res) => {
        dispatch(locationDetail(res.data[0]));
      })
      .catch((e) => {});
  }, []);

  return (
    <div>
      <Search />
      <Location />
      <Forecasts />
    </div>
  );
}

export default Home;
