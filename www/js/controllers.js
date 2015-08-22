angular.module('starter.controllers', [])

.controller('CurrentCtrl', function($scope, geoLocation, $http) {
  navigator.geolocation.getCurrentPosition(function(position, error) {
    if (error) {
      console.log('position error');
      console.log(err);
      geoLocation.setGeolocation(30.330392, -97.736796)
    }

    geoLocation.setGeolocation(position.coords.latitude, position.coords.longitude);
    geoLocation.setGeoCity();
  })

  var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
  var unitType = "imperial";
  var city = localStorage.geoCity;
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather"
  var params = {
    q: city,
    units: unitType,
    APPID: neededThing
  }
  var resp =  {
    success: function(data) {
      console.log("data", data);
      $scope.data = data.data;
      console.log("scope data", $scope.data.name);
      $scope.city = $scope.data.name;
      $scope.temp = data.data.main.temp;
    },
    error: function(data) {
      console.log("Error", data);
    }
  }
  $http.get(apiUrl, {params:params})
    .then(resp.success, resp.error);

  // console.log("scope data", $scope.data);
  // console.log($scope.data.success());
  // WeatherConditions.getCurrTemp();
  // console.log(WeatherConditions.getCurrTemp());
  // $scope.conditions = WeatherConditions;
  // $scope.conditions.$promise.then(function(conditions) {
  //   $scope.city = conditions.name;
  // })
  // console.log($scope.city)
  // console.log("GeoCity " + geoLocation.getGeoCity());
  // $scope = WeatherConditions.currentRaw();
  // $scope.then(function(conditions) {
  //   $scope.city = conditions.name;
  // })
  // var test = WeatherConditions.currentRaw();
  // test.then(function(conditions) {
  //   console.log(conditions.main.temp);
  //   $scope.city = conditions.name;
  //   console.log($scope.city);
  // })
  // console.log($scope.city);
  // WeatherConditions.getTemp();
})

.controller('ForecastCtrl', function($scope, WeatherConditions) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
