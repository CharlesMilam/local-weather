angular.module("LocalWeather.common")
.factory("ChangeUnits", function ChangeUnitsFactory(){
  return {
    getIsMetric: function() {
      return localStorage.getItem("weatherUnitMetric");
    },
    setIsMetric: function(metric) {
      localStorage.setItem("weatherUnitMetric", metric);
    }
  };
});
