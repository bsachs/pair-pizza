//JS functions for map API only

//Global variables
var map;
var wineIcon = "icons/purple_MarkerW.png";
var pizzaIcon = "icons/orange_MarkerP.png";

//Pizza locations array
var pizzaLoc = [
  ["Pizza Taglio", 40.460540, -79.925069],
  ["Piccolo Forno", 40.467311, -79.964437],
  ["Fiori's Pizzaria", 40.281391, -80.126215],
  ["Mineo Pizza House", 40.4328867,-79.9932644],
  ["Il Pizzaiolo", 40.380192,-80.04667],
  ["La Tavola Italiana", 40.4267981,-80.0078418],
  ["Slice on Broadway", 40.4598168,-79.9268658],
  ["Beto's Pizza", 40.4127159,-80.0653543],
  ["Proper Brick Oven and Taproom", 40.4435533,-80.0024073],
  ["DiAnoia's Eatery", 40.4549248,-79.9809256],
  ["Spak Brothers", 40.465299, -79.942544]
];

//Wine stores array
var wineLoc = [
    ["Pennsylvania Libations", 40.4518606,-79.9852175],
    ["Dreadnought Wines", 40.4619654,-79.9676088],
    ["Pennsylvania Wine Cellar", 40.4203222,-79.9960993],
    ["Pennsylvania Wine Cellar", 40.4205836,-79.9964427]
];

//Create map at API call, centered
function initMap() {
  var pghCenter = {lat: 40.444473, lng: -79.945549};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: pghCenter,
  });
}

// Shows pizza places only
function showPizzaMarkers() {
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < pizzaLoc.length; i++) {
      var group = pizzaLoc[i];
      var content = group[0];
      var markerLatLng = new google.maps.LatLng(group[1], group[2]);
      var marker = new google.maps.Marker({
        position: markerLatLng,
        icon: pizzaIcon,
        map: map,
        title: group[0],
        animation: google.maps.Animation.DROP
      });
  }
}

// Shows wine places only
function showWineMarkers() {
    for (var j = 0; j <wineLoc.length; j++) {
      var group = wineLoc[j];
      var content = group[0];
      var markerLatLng = new google.maps.LatLng(group[1], group[2]);
      var marker = new google.maps.Marker({
        position: markerLatLng,
        icon: wineIcon,
        map: map,
        title: group[0],
        animation: google.maps.Animation.DROP
      });
  }
}
