angular.module("LocalWeather.weather-settings")
.controller('SettingsCtrl', function($scope, ChangeUnits, WeatherConditions) {
  $scope.settings = {
    enableMetric: ChangeUnits.getIsMetric()
  };
  $scope.toggleChange = function() {
    ChangeUnits.setIsMetric($scope.settings.enableMetric);
    $scope.metricNotificationChange();
    // $scope.getConditions;
    WeatherConditions()
    .then(function success(resp) {
      console.log("data", resp.data);
      var data = resp.data;
      $scope.conditions = {
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        sky: data.weather[0].description,
        icon: data.weather[0].id,
        wind: {
          speed: data.wind.speed,
          dir: data.wind.deg
        },
        currdate: new Date(data.dt)
      };
    }),
    function error(data) {
      return console.log("ERROR", data);
    }
  };

  $scope.metricNotificationChange = function() {
   console.log('metric changed', $scope.settings.enableMetric);
  };

});
