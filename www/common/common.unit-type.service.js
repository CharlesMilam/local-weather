angular.module("LocalWeather.common")
.factory("ChangeUnits", function ChangeUnitsFactory(){
  return {
    getUnitType: function() {
      return localStorage.getItem("weatherUnitType")
    },
    setUnitType: function() {
      if (localStorage.getItem("weatherUnitType")) {
        localStorage.getItem("weatherUnitType") === "imperial"
        ? localStorage.setItem("weatherUnitType", "metric")
        : localStorage.setItem("weatherUnitType", "imperial");
      }
      else {
        localStorage.setItem("weatherUnitType", "imperial")
      }
    }
  }
})
