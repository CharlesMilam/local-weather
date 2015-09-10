angular.module("LocalWeather.weather-settings")
.controller('SettingsCtrl', function($scope, ChangeUnits) {
  $scope.settings = {
    enableMetric: false
  };
  $scope.toggleChange = function() {
    ChangeUnits.setUnitType($scope.settings.enableMetric);
    $scope.doRefresh = function() {
      getConditions();
      $scope.$broadcast("scroll.refreshComplete");
    };
  };

});
