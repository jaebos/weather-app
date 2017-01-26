$(document).ready(function(){

  var long;
  var lat;
  var fTemp;
  var cTemp;
  var kTemp;

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      long = position.coords.longitude;
      lat = position.coords.latitude;


//Create API with geolocation
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=a6883ff8993a6da2e03aa69d6464ba6b';

  $.getJSON(api, function(data){
    //JSON call for Open Weather API

    var weatherType=data.weather[0].main;
        kTemp = data.main.temp;
        var windSpeed = data.wind.speed;
    var city = data.name;
    var tempSwap = false;

    fTemp = Math.round(kTemp*(9/5)-459.67);
    //Temp in F

    cTemp = Math.round(kTemp-273);
    //Temp in C

    $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457; ");
      $("#fTemp").click(function(){

        if(tempSwap===false){
          $("#fTemp").html(cTemp + " &#8451 ");
          tempSwap=true;
        }
        else{
          $("#fTemp").html(fTemp + " &#8457; ");
          tempSwap=false;
        }

      });

  });

});

}

});
