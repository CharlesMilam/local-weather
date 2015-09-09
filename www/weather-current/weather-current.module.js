angular.module("LocalWeather.weather-current", ["ionic"])
  .config(function($stateProvider, $urlRouterProvider) {
    console.log("in current config");
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    .state('tab.current', {
      url: '/current',
      views: {
        'tab-current': {
          templateUrl: 'weather-current/tab-current.html',
          controller: 'CurrentCtrl'
        }
      }
    });
});
