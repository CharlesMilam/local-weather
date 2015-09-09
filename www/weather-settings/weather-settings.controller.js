angular.module("LocalWeather.weather-settings")
.controller('SettingsCtrl', function($scope, ChangeUnits) {
  $scope.settings = {
    enableMetric: "imperial"
  };
  $scope.toggleChange = function() {
    ChangeUnits.setUnitType($scope.settings.enableMetric);
  }

});
