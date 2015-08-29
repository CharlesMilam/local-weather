angular.module("LocalWeather.weather-forecast", ["ionic"])
.config(function($stateProvider, $urlRouterProvider) {
  console.log("in forecast config");
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tab.forecast', {
      url: '/forecast',
      views: {
        'tab-forecast': {
          templateUrl: 'weather-forecast/tab-forecast.html',
          controller: 'ForecastCtrl'
        }
      }
    })
});
