angular.module("LocalWeather.common")
.factory("ChangeUnits", function ChangeUnitsFactory(){
  return {
    getUnitType: function() {
      return localStorage.getItem("weatherUnitType");
    },
    setUnitType: function(metric) {
      localStorage.setItem("weatherUnitType", metric);
    }
  };
});
