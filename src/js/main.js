$(document).ready(function($) {

  //Preloader
  var preloader = $('.preloader');
  $(window).load(function(){
    preloader.remove();
  });

  
  // Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });

  $('.navbar-collapse ul li a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

  // User define function
  function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-collapse').find('.scroll a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top);
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
      if ( winTop > contentTop[i] - rangeTop ){
        $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');      
      }
    })
  };

  $('#tohash').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });
  
  //smoothScroll

  




  // Contact form
  var form = $('#main-contact-form');
  form.submit(function(event){
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),
      beforeSend: function(){
        form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
      }
    }).done(function(data){
      form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
    });
  });


  //Google Map
 var markers = [{
   "title": 'Castroville, CA',
   "lat": '36.766632',
   "lng": '-121.761594'
 }, {
   "title": 'Fresno, CA',
   "lat": '36.758691',
   "lng": '-119.744593'
 }, {
   "title": 'Eureka, CA',
   "lat": '40.804258',
   "lng": '-124.124633'
 }, {
   "title": 'Grover Beach, CA',
   "lat": '35.1188847',
   "lng": '-120.6269535'
 }, {
   "title": 'Redding, CA',
   "lat": '40.529867',
   "lng": '-122.384846'
 }, {
   "title": 'Sacramento, CA',
   "lat": '38.5281132',
   "lng": '-121.3995899'
  }, {
   "title": 'Boise, ID',
   "lat": '43.578279',
   "lng": '-116.280586'
 }, {
   "title": 'Idaho Falls, ID',
   "lat": '43.537242',
   "lng": '-112.006756'
 }, {
   "title": 'Twin Falls, ID',
   "lat": '42.550228',
   "lng": '-114.482573'
 }, {
   "title": 'Billings, MT',
   "lat": '45.762988',
   "lng": '-108.550816'
 }, {
   "title": 'Bozeman, MT',
   "lat": '45.670555',
   "lng": '-111.105485'
  }, {
   "title": 'Missoula, MT',
   "lat": '46.913432',
   "lng": '-114.058487'
 }, {
   "title": 'Reno, NV',
   "lat": '39.549819',
   "lng": '-119.80962'
 }, {
   "title": 'Las Vegas, NV',
   "lat": '36.0936145',
   "lng": '-115.1877006'
 }, {
   "title": 'Medford, OR',
   "lat": '42.3845589',
   "lng": '-122.8556595'
 }, {
   "title": 'Oklahoma City, OK',
   "lat": '35.4632314',
   "lng": '-97.5729852'
 }, {
   "title": 'Tulsa, OK',
   "lat": '36.105401',
   "lng": '-95.8894059'
 }, {
   "title": 'Wichita Falls, TX',
   "lat": '33.929595',
   "lng": '-98.537604'
 }, {
   "title": 'Lake Havasu City, AZ',
   "lat": '34.5030289',
   "lng": '-114.3494259',
  }];
 window.onload = function() {
   LoadMap();
 }

 function LoadMap() {
   var mapOptions = {
     center: new google.maps.LatLng(39, -95),
     zoom: 5,
   disableDefaultUI: true,
   scrollwheel: false,
   navigationControl: true,
   mapTypeControl: true,
   scaleControl: true,
   draggable: true,
     mapTypeId: google.maps.MapTypeId.ROADMAP,

      styles:[
              {
                  "featureType": "administrative",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#0c0b0b"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "all",
                  "stylers": [
                      {
                          "color": "#f2f2f2"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "poi.attraction",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "off"
                      },
                      {
                          "color": "#ff0000"
                      }
                  ]
              },
              {
                  "featureType": "poi.attraction",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#000000"
                      }
                  ]
              },
              {
                  "featureType": "poi.attraction",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "poi.business",
                  "elementType": "labels.text",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ff0000"
                      }
                  ]
              },
              {
                  "featureType": "poi.business",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#000000"
                      }
                  ]
              },
              {
                  "featureType": "poi.business",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "poi.government",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "saturation": "-100"
                      }
                  ]
              },
              {
                  "featureType": "poi.medical",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "saturation": "-100"
                      }
                  ]
              },
              {
                  "featureType": "poi.park",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "saturation": "-100"
                      },
                      {
                          "lightness": "30"
                      }
                  ]
              },
              {
                  "featureType": "poi.place_of_worship",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "poi.place_of_worship",
                  "elementType": "labels.text",
                  "stylers": [
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "poi.place_of_worship",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ff0000"
                      }
                  ]
              },
              {
                  "featureType": "poi.place_of_worship",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "poi.place_of_worship",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "poi.school",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "saturation": "-100"
                      }
                  ]
              },
              {
                  "featureType": "poi.sports_complex",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "saturation": "-100"
                      }
                  ]
              },
              {
                  "featureType": "poi.sports_complex",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#000000"
                      }
                  ]
              },
              {
                  "featureType": "poi.sports_complex",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": -100
                      },
                      {
                          "lightness": 45
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#090909"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "simplified"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "transit.line",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "weight": "1"
                      }
                  ]
              },
              {
                  "featureType": "transit.station.airport",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "transit.station.rail",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ff0000"
                      },
                      {
                          "weight": "1"
                      }
                  ]
              },
              {
                  "featureType": "transit.station.rail",
                  "elementType": "labels.text",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "hue": "#ff0000"
                      }
                  ]
              },
              {
                  "featureType": "transit.station.rail",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "all",
                  "stylers": [
                      {
                          "color": "#d4e4eb"
                      },
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#D74B4B"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#9b7f7f"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "color": "#fef7f7"
                      }
                  ]
              }
          ]
   };
   var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);

   //Create and open InfoWindow.
   var infoWindow = new google.maps.InfoWindow();

   for (var i = 0; i < markers.length; i++) {
     var data = markers[i];
     var myLatlng = new google.maps.LatLng(data.lat, data.lng);
     var marker = new google.maps.Marker({
       position: myLatlng,
       map: map,
       icon: 'img/map.png',
       title: data.title
     });




     //Attach click event to the marker.
     (function(marker, data) {
       google.maps.event.addListener(marker, "click", function(e) {
         //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
         infoWindow.setContent(
            "<h3 style='text-align: center; margin: 0px;'>" + data.title + "</h3>");
         infoWindow.open(map, marker);
       });
     })(marker, data);
   }
 }

  
});


