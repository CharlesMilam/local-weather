angular.module("LocalWeather.weather-settings", ["ionic"])
.config(function($stateProvider, $urlRouterProvider) {
  console.log("in settings config");
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'weather-settings/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

});
