// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GIPHY_API_URL: "https://api.giphy.com/v1/gifs/search?api_key=GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK&q=",
  // GIPHY_API_KEY: "GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK",
  // a GIPHY_QUERY string will go inbetween these two so we can add our search term to api call.
  GIPHY_QUERY_FORMAT: "&limit=25&offset=0&rating=g&lang=en",
  // general structure: url + '&q=' + query_format
  FIREBASE_API_URL: "",
  FIREBASE_API_KEY: ""


  // Usage of api call for giphy
  // let q: string[] | null;
  //   const giphyCallUrl = `${environment.GIPHY_API_URL}${q}${environment.GIPHY_QUERY_FORMAT}`;
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
