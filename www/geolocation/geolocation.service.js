angular.module("LocalWeather.geolocation")
// GeoLocation factory
.factory('GeoLocation', ['$localStorage', function GeoLocationFactory($localStorage) {
  console.log("in geolocation factory");
  return {
    setGeolocation: function (latitude, longitude) {
      var position = {
        latitude: latitude,
        longitude: longitude
      };
      $localStorage.geoLocation = position;
    },
    getGeolocation: function () {
      var locn = $localStorage.geoLocation;
      return glocation = {
        lat: locn.latitude,
        lng: locn.longitude
      };
    },
    setGeoCity: function() {
      var locn = $localStorage.geoLocation;
      var latlng = new google.maps.LatLng(locn.latitude, locn.longitude);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        console.log("status " + status);
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            for (var i = 0; i < results.length; i++) {
              if (results[i].types[0] === "locality") {
                $localStorage.geoCity =  results[i].address_components[0].short_name;
              }
            }
          }
        }
      });
    },
    getGeoCity: function() {
      var city = $localStorage.geoCity;

      return $localStorage.geoCity;
    }
  };
}]);
