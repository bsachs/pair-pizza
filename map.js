function initMap() {
  var center = {
    lat: 38.539069,
    lng: -121.755094
  };
  var map = new google.maps.Map(document.getElementById('map'), {
   center: center,
    zoom: 16,
    mapTypeControl: false,
    scaleControl: true,
    zoomControl: true,
    streetViewControl: false
  });
  setMarkers(map);
}

var groups = [
  ['Group 1', 38.5407475228024, -121.748492717743],
  ['Group 2', 38.5421657099453, -121.756362318993],
  ['Group 3', 38.5421321437088, -121.750096678734],
  ['Group 4', 38.5426859846077, -121.759044528008],
  ['Group 5', 38.540990882347,
-121.761364638805],
  ['Group 6', 38.5388174007006, -121.75291031599],
  ['Group 7', 38.5360312200671, -121.757885813713],
  ['Group 8', 38.5433740840259, -121.759162545204],
  ['Group 9', 38.5395768679688, -121.754862964153],
  ['Group 10', 38.5439950461421, -121.749313473701],
  ['Group 11', 38.53960623947, -121.756045818329]
];

function setMarkers(map) {
  var bounds = new google.maps.LatLngBounds();
  var infowindow = new google.maps.InfoWindow();



  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    var content = group[0];
    var markerLatLng = new google.maps.LatLng(group[1], group[2]);
    var marker = new google.maps.Marker({
      position: markerLatLng,
      map: map,
      title: group[0],
      animation: google.maps.Animation.DROP
    });

    bounds.extend(markerLatLng);

    google.maps.event.addListener(marker,"click", (function(marker,content,infowindow){
      return function() {
        infowindow.setContent(content);
        infowindow.open(map, marker);
      };
    })(marker,content,infowindow));

    map.fitBounds(bounds);

  }

}
