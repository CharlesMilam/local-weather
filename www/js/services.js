angular.module('starter.services', ['ngResource'])

.factory('geoLocation', function () {
  return {
    setGeolocation: function (latitude, longitude) {
      var position = {
        latitude: latitude,
        longitude: longitude
      }
      localStorage.setItem('geoLocation', JSON.stringify(position));
    },
    getGeolocation: function () {
      var locn = JSON.parse(window.localStorage.getItem('geoLocation'));
      return glocation = {
        lat: locn.latitude,
        lng: locn.longitude
      }
    },
    setGeoCity: function() {
      var locn = JSON.parse(localStorage.getItem('geoLocation'));
      var latlng = new google.maps.LatLng(locn.latitude, locn.longitude);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        // console.log("status " + status);
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            for (var i = 0; i < results.length; i++) {
              if (results[i].types[0] === "locality") {
                localStorage.setItem('geoCity', results[i].address_components[0].short_name);
              }
            }
          }
        }
      });
    },
    getGeoCity: function() {
      var city = localStorage.getItem('geoCity')

      return localStorage.getItem('geoCity')
    }
  }
})

.factory("WeatherConditions", function($resource) {
  return {
    current: function() {
      var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
      var unitType = "imperial";
      var city = localStorage.geoCity;

      // console.log("curr city " + city);
      var apiUrl = "http://api.openweathermap.org/data/2.5/weather"
      var params = {
        q: city,
        units: unitType,
        APPID: neededThing
      }
      var conditions = $resource(apiUrl).get(params);

      // console.log(conditions);
      return conditions;
    }
  }
})

//               apiCurrentUrl = "http://api.openweathermap.org/data/2.5/weather?q=" +
//                         results[i].address_components[0].short_name +
//                         "&units=" +
//                         unitType +
//                         "&APPID=" +
//                         neededThing;
//
//               apiForecastUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
//                         results[i].address_components[0].short_name +
//                         "&units=" +
//                         unitType +
//                         "&APPID=" +
//                         neededThing;
