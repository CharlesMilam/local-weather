angular.module('starter.controllers', ["ionic"])

.controller('CurrentCtrl', function($scope, GeoLocation, WeatherConditions) {
  // get current lat/long from device, and set position in local storage
  // using geolocation service
  navigator.geolocation.getCurrentPosition(function(position, error) {
    if (error) {
      console.log('position error');
      console.log(err);
      // fallback location if unable to obtain from device
      GeoLocation.setGeolocation(30.330392, -97.736796)
    }
    // set the location and city
    GeoLocation.setGeolocation(position.coords.latitude, position.coords.longitude);
    GeoLocation.setGeoCity();
  })

  $scope.weatherConditions;
  getConditions();

  function getConditions() {
    WeatherConditions()
    .success(function(data) {
      console.log("data", data);
      $scope.conditions = {
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        sky: data.weather[0].description,
        icon: data.weather[0].id,
        wind: {
          speed: data.wind.speed,
          dir: data.wind.dir
        },
        currdate: data.dt
      };
    })
    .error(function(data) {
      console.log("Error", data);
    })
  }
  // $scope.weatherConditions = function() {
  //   return WeatherCondions();
  // }
  // console.log(weatherConditions.name);
  // console.log($scope.weatherConditions());
  // var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
  // var unitType = "imperial";
  // var city = GeoLocation.getGeoCity();
  // var apiUrl = "http://api.openweathermap.org/data/2.5/weather"
  // var params = {
  //   q: city,
  //   units: unitType,
  //   APPID: neededThing
  // }
  //
  // var resp =  {
  //   success: function(res) {
  //     console.log("resp", res);
  //     $scope.conditions = {
  //       city: res.data.name,
  //       temp: res.data.main.temp,
  //       humidity: res.data.main.humidity,
  //       sky: res.data.weather[0].description,
  //       icon: res.data.weather[0].id,
  //       wind: {
  //         speed: res.data.wind.speed,
  //         dir: res.data.wind.dir
  //       },
  //       currdate: res.data.dt
  //     }
  //   },
  //   error: function(err) {
  //     console.log("Error", err);
  //   }
  // }
  // $http.get(apiUrl, {params:params}).then(resp.success, resp.error);

  // refresh on pull
  // $scope.doRefresh = function() {
  //   $http.get(apiUrl, {params:params}).then(resp.success, resp.error);
  //   $scope.$broadcast("scroll.refreshComplete");
  // }

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
