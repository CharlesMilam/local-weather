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

  // retrieves current weather conditions form WeatherConditions factory
  getConditions();

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
        currdate: data.dt
      };
    }),
    function error(data) {
      console.log("ERROR", data);
    };
  }

  // refresh on pull
  $scope.doRefresh = function() {
    getConditions();
    $scope.$broadcast("scroll.refreshComplete");
  }

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
