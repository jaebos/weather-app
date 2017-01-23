$(document).ready(function(){
  var long;
  var lat;
  var temp;

      if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      long = position.coords.longitude;
      lat = position.coords.latitude;


//Create API with geolocation
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=a6883ff8993a6da2e03aa69d6464ba6b';

  $.getJSON(api, function(data){

    var city = data.name;

    console.log(city);
    console.log(api);

  });
});
}

});
