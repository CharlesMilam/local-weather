// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('LocalWeather', [
      "LocalWeather.geolocation",
      "LocalWeather.weather-current",
      "LocalWeather.weather-forecast",
      "LocalWeather.weather-settings",
      "LocalWeather.common",
      "ionic",
      "ngStorage"
    ])

.run(function($ionicPlatform, ChangeUnits) {
  console.log("in app run");
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
  // set unit type of metric to false by default, if it doesn't exist
  // if (!ChangeUnits.getIsMetric()) {
  //   ChangeUnits.setIsMetric(false);
  // }
})

.config(function($stateProvider, $urlRouterProvider) {
  console.log("in app config");

  // if no states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/current');

});
