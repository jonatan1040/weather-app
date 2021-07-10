const axios = require("axios");

export function SearchData(localizedName, key = null) {
  let config = {
    method: "get",
    url: "https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    params: {
      apikey: process.env.REACT_APP_APIKEY,
      q: localizedName,
      language: "en-us",
    },
    headers: {},
  };

  return axios(config);
}

export function getForecasts(key, metric) {
  let config = {
    method: "get",
    url: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`,
    params: {
      apikey: process.env.REACT_APP_APIKEY,
      language: "en-us",
      details: false,
      metric: metric,
    },
    headers: {},
  };

  return axios(config);
}

export function LocationData(key) {
  let config = {
    method: "get",
    url: `https://dataservice.accuweather.com/currentconditions/v1/${key}`,
    params: {
      apikey: process.env.REACT_APP_APIKEY,
      language: "en-us",
      details: false,
      metric: true,
    },
    headers: {},
  };

  return axios(config);
}

// export function GeoLocation(lat, lon) {
//   let geolocation = `${(lat, lon)}`;
//   console.log(geolocation);
//   let config = {
//     method: "get",
//     url: "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
//     params: {
//       apikey:
//         //   "CvlRcIeIULTeijAKlwtvhOrOXSBSonYt", //jonatan
//         // "KBdCykosegYv5bcUX41egCavx9CYRCxF", //shlomi
//         // "KNBtrsLmUJN8jukFLPwfD2O2tNwTDvY2", //mayra
//         "kMqbnAeg14A5d7GLAT5AiGgWtJ0hZk51", //ravit
//       q: geolocation,
//       language: "en-us",
//       details: true,
//       toplevel: false,
//     },
//     headers: {},
//   };

//   return axios(config);
// }
