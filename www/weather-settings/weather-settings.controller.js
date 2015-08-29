angular.module("LocalWeather.weather-settings")
.controller('SettingsCtrl', function($scope, ChangeUnits) {
  $scope.settings = {
    enableMetric: "imperial"
  };
  ChangeUnits.setUnitType($scope.settings.enableMetric);
});
