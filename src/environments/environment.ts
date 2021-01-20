// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    /**
     * You get this from Firebase console:
     * https://console.firebase.google.com/
     */
    firebase: {
        apiKey: "AIzaSyDofYDkLu1QK8wDIy8-as4nqS5UB0gDHKY",
        authDomain: "sendbird-push-9c7e5.firebaseapp.com",
        databaseURL: "https://sendbird-push-9c7e5.firebaseio.com",
        projectId: "sendbird-push-9c7e5",
        storageBucket: "sendbird-push-9c7e5.appspot.com",
        messagingSenderId: "202211528502",
        appId: "1:202211528502:web:220558c0be3d04d29e2d97",
        measurementId: "G-FHJ236Q88G"    
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
