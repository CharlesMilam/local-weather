angular.module('starter.controllers', [])

.controller('CurrentCtrl', function($scope, GeoLocation, $http) {
  navigator.geolocation.getCurrentPosition(function(position, error) {
    if (error) {
      console.log('position error');
      console.log(err);
      GeoLocation.setGeolocation(30.330392, -97.736796)
    }

    GeoLocation.setGeolocation(position.coords.latitude, position.coords.longitude);
    GeoLocation.setGeoCity();
  })

  var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
  var unitType = "imperial";
  var city = GeoLocation.getGeoCity();
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather"
  var params = {
    q: city,
    units: unitType,
    APPID: neededThing
  }

  var resp =  {
    success: function(res) {
      console.log("data", res);
      // $scope.data = data.data;
      // console.log("scope data", $scope.data.name);
      $scope.conditions = {
        city: res.data.name,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        sky: res.data.weather[0].description,
        icon: res.data.weather[0].id,
        wind: {
          speed: res.data.wind.speed,
          dir: res.data.wind.dir
        }
      }
    },
    error: function(err) {
      console.log("Error", err);
    }
  }
  $http.get(apiUrl, {params:params}).then(resp.success, resp.error);

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
