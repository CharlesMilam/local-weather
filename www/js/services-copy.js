angular.module('starter.services', ['ngResource'])

.factory('CurrentConditons', function() {
  var neededThing = "87a3ac98e2e48918db144e9f69eeb057";
  var apiCurrentUrl = "";
  // get geolocation from browser
  // alert("curr pos " + $cordovageolocation.getCurrentPosition());
  navigator.geolocation.getCurrentPosition(success, error);
  // if geolocation retrieved successfully
  function success(position) {
    var unitType = "imperial";
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var latlng = new google.maps.LatLng(lat, long);
    var geocoder = new google.maps.Geocoder();
    // var apiCurrentUrl = "";
    var apiForecastUrl = "";

    // reverse lookup of city from lat long via google map api
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          for (var i = 0; i < results.length; i++) {
            if (results[i].types[0] === "locality") {
              apiCurrentUrl = "http://api.openweathermap.org/data/2.5/weather?q=" +
                        results[i].address_components[0].short_name +
                        "&units=" +
                        unitType +
                        "&APPID=" +
                        neededThing;

              apiForecastUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
                        results[i].address_components[0].short_name +
                        "&units=" +
                        unitType +
                        "&APPID=" +
                        neededThing;

              // setCurrentWeatherFromApi(apiCurrentUrl, unitType);
              // setForecastWeatherFromApi(apiForecastUrl, unitType);
              // getCurrentWeather(apiCurrentUrl, unitType)
            }
          }
        }
        else {alert("Sorry, there were no results for your location.")}
      }
      else {console.log("Geocoder failed: " + status)}
    });
  };
  // send alert on error
  function error(error) {
    alert(error);
  };

  // set the current weather conditions from openweathermap api
  function getCurrentWeather(apiUrl, unitType) {
    var speedSymbol = "";
    var degreesSymbol = "";
    var dayNight = "";
    var currHour = new Date().getHours();

    // set the speed and temperature symbols based on the unit type
    if (unitType === "imperial") {
      speedSymbol = " mph";
      tempSymbol = "&#8457;";
    }
    else {
      speedSymbol = " km/h";
      tempSymbol = " &#8451;";
    }
    // determine if day or night, for use with displaying the night time
    // version of owfont icon
    if (currHour > 7 && currHour < 19) {
      dayNight = "-d";
    }
    else {
      dayNight = "-n";
    }
    // get the current weather conditions from openweathermap
    // create html elements to replace defaults for current conditions card
    var currConditions = $resource(apiUrl, function(data){
      var weatherIcon = data.weather[0].id;
      var city = data.name;
      var temp = data.main.temp.toFixed(1);
      var humidity = data.main.humidity;
      var weatherDescription = data.weather[0].description;
      var windDirection = translateWindDirection(data.wind.deg);
      var windSpeed = data.wind.speed.toFixed(1);

      var currConditions = [
        {
          icon: weatherIcon,
          city: city,
          temp: temp,
          humidity: humidity,
          description: weatherDescription,
          windDir: windDirection,
          windSpeed: windSpeed
        }
      ];

      return currConditions;
      // comment out the div creaton during intial dev
      // var iconDiv = "<div class='weather-icon curr-cond-data'><i class='owf owf-" +
      //   weatherIcon +
      //   dayNight +
      //   "'></i></div>";
      // var cityDiv = "<div class='city curr-cond-data'>" +
      //   city +
      //   "</div>";
      // var tempDiv = "<div class='temp curr-cond-data'><span class='weather-label'>Current Temperature</span><br>" +
      //   temp + tempSymbol +
      //   "</div>";
      // var humidityDiv = "<div class='humidity curr-cond-data'><span class='weather-label'>Humidity</span><br>" +
      //   humidity +
      //   "%</div>";
      // var skyDiv = "<div class='sky curr-cond-data'>" +
      //   weatherDescription +
      //   "</div>";
      // var windDiv = "<div class='wind curr-cond-data'><span class='weather-label'>Wind Direction &amp; Speed</span><br>" +
      //   windDirection +
      //   " @ " +
      //   windSpeed + speedSymbol +
      //   "</div>";
      //
      // console.log(data);
      // // replace default current conditions div with those containing data
      // $(".weather-icon").replaceWith(iconDiv);
      // $(".city").replaceWith(cityDiv);
      // $(".temp").replaceWith(tempDiv);
      // $(".humidity").replaceWith(humidityDiv);
      // $(".sky").replaceWith(skyDiv);
      // $(".wind").replaceWith(windDiv);
      // set the body background color based on the current temp
      // commented out during intial dev
      // setBackgroundToTemp(temp, unitType);
    })
    .fail(function(jqxhr, status, error) {
      var err = status + ", " + error;
      alert("Sorry, the request failed: " + err);
    });
  }

  return {
    get: $resource(apiCurrentUrl)
  };
}); // end Current Conditons service



// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array
//
//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//   }];
//
//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// });
