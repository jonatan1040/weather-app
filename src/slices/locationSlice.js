import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fahrenheitOrcelsius: "celsius",
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
  favorites: [],
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setfahrenheitOrcelsius: (state, action) => {
      if (state.fahrenheitOrcelsius === "celsius") {
        state.fahrenheitOrcelsius = "fahrenheit";
        console.log("fahrenheit", action.payload);
      } else {
        state.fahrenheitOrcelsius = "celsius";
        console.log("celsius", action.payload);
      }
    },
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
    setFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
      console.log("favorites", action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = action.payload;
      console.log("favorites", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setfahrenheitOrcelsius,
  setLocationsByName,
  setLocation,
  setForecasts,
  locationDetail,
  setFavorites,
  removeFavorite,
} = locationsSlice.actions;

export default locationsSlice.reducer;
