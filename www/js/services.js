angular.module('starter.services', ['ngResource'])

.factory('geoLocation', function () {
  return {
    setGeolocation: function (latitude, longitude) {
      var position = {
        latitude: latitude,
        longitude: longitude
      }
      window.localStorage.setItem('geoLocation', JSON.stringify(position));
      // window.localStorage['geoLocation'] = JSON.stringify(position);
    },
    getGeolocation: function () {
      return glocation = {
        lat: JSON.parse(window.localStorage.getItem('geoLocation.latitude')),
        lng: JSON.parse(window.localStorage.getItem('geoLocation.longitude'))
      }
    },
    setGeoCity: function() {
      var locn = JSON.parse(window.localStorage.getItem('geoLocation'));
      var latlng = new google.maps.LatLng(locn.latitude, locn.longitude);
      var geocoder = new google.maps.Geocoder();
      window.localStorage['geoCity'] =
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          // console.log("status " + status);
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              for (var i = 0; i < results.length; i++) {
                if (results[i].types[0] === "locality") {
                  window.localStorage.setItem('geoCity', JSON.stringify(results[i].address_components[0].short_name));
                }
              }
            }
          }
        });
      },
      getGeoCity: function () {
        return window.localStorage.getItem('city');
      }
  }
})
// .factory('CurrentConditons', function() {
//   var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
//   var apiCurrentUrl = "";
//   // get geolocation from browser
//   // alert("curr pos " + $cordovageolocation.getCurrentPosition());
//   navigator.geolocation.getCurrentPosition(success, error);
//   // console.log("made it here");
//   // if (error) {
//   //   alert(error);
//   // }
//
//
//
//   // console.log("success " + success);
//   // if geolocation retrieved successfully
//   function success(position) {
//     console.log("position " + position);
//     for (var key in position) {
//       console.log(position[key]);
//     }
//     var unitType = "imperial";
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     var latlng = new google.maps.LatLng(lat, long);
//     var geocoder = new google.maps.Geocoder();
//     // var apiCurrentUrl = "";
//     var apiForecastUrl = "";
//
//     // reverse lookup of city from lat long via google map api
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         if (results[1]) {
//           for (var i = 0; i < results.length; i++) {
//             if (results[i].types[0] === "locality") {
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
//
//               // setCurrentWeatherFromApi(apiCurrentUrl, unitType);
//               // setForecastWeatherFromApi(apiForecastUrl, unitType);
//               // getCurrentWeather(apiCurrentUrl, unitType)
//             }
//           }
//         }
//         else {alert("Sorry, there were no results for your location.")}
//       }
//       else {console.log("Geocoder failed: " + status)}
//     });
//     return apiCurrentUrl;
//   };
//   // send alert on error
//   function error(error) {
//     alert(error);
//   };
//   console.log("curr url " + apiCurrentUrl);
//   return {
//     get: success
//   };
// }); // end Current Conditons service
