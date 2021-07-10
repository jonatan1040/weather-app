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
  showError: { toggle: false, title: "", message: "" },
  weatherIconsFolder: {},
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setfahrenheitOrcelsius: (state, action) => {
      if (state.fahrenheitOrcelsius === "celsius") {
        state.fahrenheitOrcelsius = "fahrenheit";
      } else {
        state.fahrenheitOrcelsius = "celsius";
      }
    },
    setLocationsByName: (state, action) => {
      state.locationsByName = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    locationDetail: (state, action) => {
      state.locationDetail = action.payload;
    },
    setForecasts: (state, action) => {
      state.forecasts = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action) => {
      state.favorites = action.payload;
    },
    toggleShowError: (state, action) => {
      state.showError.toggle = action.payload.toggle;
      state.showError.title = action.payload.title;
      state.showError.message = action.payload.message;
    },
    setIconsFolder: (state, action) => {
      state.weatherIconsFolder = action.payload;
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
  toggleShowError,
  setIconsFolder,
} = locationsSlice.actions;

export default locationsSlice.reducer;
