angular.module("LocalWeather.common")
.factory("ChangeUnits", ["$localStorage", function ChangeUnitsFactory($localStorage){
  return {
    getIsMetric: function() {
      return $localStorage.weatherUnitMetric;
    },
    setIsMetric: function(metric) {
      $localStorage.weatherUnitMetric = metric;
    }
  };
}]);
