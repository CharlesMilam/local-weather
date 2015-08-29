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
      "ionic"
    ])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {
  console.log("in app config");
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  // $stateProvider

  // // setup an abstract state for the tabs directive
  // .state('tab', {
  //   url: '/tab',
  //   abstract: true,
  //   templateUrl: 'common/tabs.html'
  // })

  // Each tab has its own nav history stack:

  // .state('tab.current', {
  //   url: '/current',
  //   views: {
  //     'tab-current': {
  //       templateUrl: 'weather-current/tab-current.html',
  //       controller: 'CurrentCtrl'
  //     }
  //   }
  // })

  // .state('tab.forecast', {
  //     url: '/forecast',
  //     views: {
  //       'tab-forecast': {
  //         templateUrl: 'weather-forecast/tab-forecast.html',
  //         controller: 'ForecastCtrl'
  //       }
  //     }
  //   })
  //
  // .state('tab.settings', {
  //   url: '/settings',
  //   views: {
  //     'tab-settings': {
  //       templateUrl: 'weather-settings/tab-settings.html',
  //       controller: 'SettingsCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/current');

});
