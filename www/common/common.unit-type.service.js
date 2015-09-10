angular.module("LocalWeather.common")
.factory("ChangeUnits", function ChangeUnitsFactory(){
  return {
    getUnitType: function() {
      return localStorage.getItem("weatherUnitMetric");
    },
    setUnitType: function(metric) {
      localStorage.setItem("weatherUnitMetric", metric);
    }
  };
});
