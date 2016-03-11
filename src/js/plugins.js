$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true
    });
});








$(document).ready(function() {

  var map;
  
  var myLatLng = {
    lat: -25.363,
    lng: 131.044
  };

  function initialize() {
    var mapOptions = {
      zoom: 4,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Hello World!'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});