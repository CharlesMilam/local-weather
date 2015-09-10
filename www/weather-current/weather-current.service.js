angular.module("LocalWeather.weather-current")
.factory("WeatherConditions", ["$http", "ChangeUnits", function WeatherConditionsFactory($http, ChangeUnits) {
  console.log("in weather conditions factory");
  var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
  var metric = ChangeUnits.getUnitType();
  var city = localStorage.geoCity;
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather";
  var params = {
    q: city,
    units: unitType,
    APPID: neededThing
  };
  console.log('unitType', unitType);
  return function() {
    return $http.get(apiUrl, {params:params});
  };
}]);
