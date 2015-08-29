angular.module("LocalWeather.common")
.factory("ChangeUnits", function ChangeUnitsFactory(){
  return {
    getUnitType: function() {
      return localStorage.getItem("weatherUnitType")
    },
    setUnitType: function(unitType) {
      localStorage.setItem("weatherUnitType", unitType)
    }
  }
})
