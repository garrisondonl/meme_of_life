// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

export const environment = {



  production: false,
  GIPHY_API_URL: "https://api.giphy.com/v1/gifs/search?api_key=GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK&q=",
  // a GIPHY_QUERY string will go inbetween these two so we can add our search term to api call.
  GIPHY_API_KEY: "GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK",

  firebase: {
    apiKey: "AIzaSyDinEBLKs2fcVgLT-T1t18M2Xpssfhs7KY",
    authDomain: "the-memeing-of-life.firebaseapp.com",
    projectId: "the-memeing-of-life",
    storageBucket: "the-memeing-of-life.appspot.com",
    messagingSenderId: "509608043786",
    appId: "1:509608043786:web:c873a0431ef99a851146f3",
    measurementId: "G-7P5NWJ3DP4"
}

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
