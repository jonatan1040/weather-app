const axios = require("axios");

export function SearchData(localizedName, key = null) {
  console.log("localizedName", localizedName);
  let config = {
    method: "get",
    url: "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    params: {
      apikey:
        //   "CvlRcIeIULTeijAKlwtvhOrOXSBSonYt", //jonatan
        // "KBdCykosegYv5bcUX41egCavx9CYRCxF", //shlomi
        "KNBtrsLmUJN8jukFLPwfD2O2tNwTDvY2", //mayra
      // "kMqbnAeg14A5d7GLAT5AiGgWtJ0hZk51", //ravit
      q: localizedName,
      language: "en-us",
    },
    headers: {},
  };

  return axios(config);
}

export function getForecasts(key) {
  console.log("getForecasts");
  let config = {
    method: "get",
    url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`,
    params: {
      apikey:
        //   "CvlRcIeIULTeijAKlwtvhOrOXSBSonYt", //jonatan
        // "KBdCykosegYv5bcUX41egCavx9CYRCxF", //shlomi
        "KNBtrsLmUJN8jukFLPwfD2O2tNwTDvY2", //mayra
      // "kMqbnAeg14A5d7GLAT5AiGgWtJ0hZk51", //ravit
      language: "en-us",
      details: false,
      metric: true,
    },
    headers: {},
  };

  return axios(config);
}

export function LocationData(key) {
  let config = {
    method: "get",
    url: `http://dataservice.accuweather.com/currentconditions/v1/${key}`,
    params: {
      apikey:
        //   "CvlRcIeIULTeijAKlwtvhOrOXSBSonYt", //jonatan
        // "KBdCykosegYv5bcUX41egCavx9CYRCxF", //shlomi
        "KNBtrsLmUJN8jukFLPwfD2O2tNwTDvY2", //mayra
      // "kMqbnAeg14A5d7GLAT5AiGgWtJ0hZk51", //ravit
      language: "en-us",
      details: false,
      metric: true,
    },
    headers: {},
  };

  return axios(config);
}
