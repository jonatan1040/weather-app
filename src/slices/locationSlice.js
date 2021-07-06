import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationsByName: [],
  location: {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  locationDetail: null,
  forecasts: null,
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocationsByName: (state, action) => {
      state.locationsByName = action.payload;
      console.log("getLocationsByName", action.payload);
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      console.log("getLocationByKey", action.payload);
    },
    locationDetail: (state, action) => {
      state.locationDetail = action.payload;
      console.log("locationDetail", action.payload);
    },
    setForecasts: (state, action) => {
      state.forecasts = action.payload;
      console.log("getForecasts", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocationsByName, setLocation, setForecasts, locationDetail } =
  locationsSlice.actions;

export default locationsSlice.reducer;
