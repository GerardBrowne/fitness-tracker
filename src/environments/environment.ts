// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
	  apiKey: 'AIzaSyDb25FKCJJy29VLiKgMg45D0fRXfz5i7Wc',
	  authDomain: 'ng-fitness-tracker-61320.firebaseapp.com',
	  databaseURL: 'https://ng-fitness-tracker-61320.firebaseio.com',
	  projectId: 'ng-fitness-tracker-61320',
	  storageBucket: 'ng-fitness-tracker-61320.appspot.com',
	  messagingSenderId: '1055804221103'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
