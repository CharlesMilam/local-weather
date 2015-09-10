angular.module('LocalWeather.weather-current')
.controller('CurrentCtrl', ["$scope", "GeoLocation", "WeatherConditions", 'ChangeUnits', function($scope, GeoLocation, WeatherConditions, ChangeUnits) {
  console.log("in current ctrl");
  // get current lat/long from device, and set position in local storage
  // using geolocation service
  navigator.geolocation.getCurrentPosition(function(position, error) {
    if (error) {
      console.log('position error');
      console.log(err);
      // fallback location if unable to obtain from device
      GeoLocation.setGeolocation(30.330392, -97.736796);
    }
    // set the location and city
    GeoLocation
    .setGeolocation(position.coords.latitude, position.coords.longitude);
    GeoLocation.setGeoCity();
  });

  // retrieves current weather conditions from WeatherConditions factory
  $scope.getCurrent = getConditions();

  function getConditions() {
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
      console.log("ERROR", data);
    }
  }

  $scope.$watch('metricNotification.checked', function() {
    console.log('Metric Notification Change: ' +
    ChangeUnits.getIsMetric());
    console.log('in curr ctrl', ChangeUnits.getIsMetric());
  });

  // refresh on pull
  $scope.doRefresh = function() {
    getConditions();
    $scope.$broadcast("scroll.refreshComplete");
  };

}]);
