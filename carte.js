
L.mapbox.accessToken = 'pk.eyJ1IjoiYWJiZXlyb2FkYmlrZSIsImEiOiJja25lYm1yMTcwNXB6Mm5udzVncDVlaW42In0.e4uYEiu7CxaZcMdU9KRIbg';
var map = L.mapbox.map('map')
    .setView([50.24389962793788, 4.239537397771348], 10)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
// Point de départ: gare de Charleroi :
var marker1 = L.marker([50.404948508622894, 4.438733655206532], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#FFCC00'
      })
    })
    .bindPopup('<h1>Votre Point De Départ Se Trouve Ici !</h1> <img src="./public/images/1.gare_charleroi.jpg"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio viverra, venenatis diam non, euismod dolor. Donec et ex ligula. Fusce blandit semper leo sit amet viverra. Suspendisse interdum, lacus in commodo tincidunt, velit nulla condimentum ipsum, a condimentum ex odio sit amet nunc. </p>')
    .addTo(map);

// Point d'arrêt 1:
var marker2 = L.marker([50.3643172348966, 4.284067953354553], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#FFCC00'
      })
    })
    .bindPopup('<h2>Votre Point De Départ Se Trouve Ici !</h2> <img src="./public/images/5.auberge_de_l_Abbaye.jpg"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio viverra, venenatis diam non, euismod dolor. Donec et ex ligula. Fusce blandit semper leo sit amet viverra. Suspendisse interdum, lacus in commodo tincidunt, velit nulla condimentum ipsum, a condimentum ex odio sit amet nunc. </p>')
    .addTo(map);


// Point d'arrêt 2:
var marker3 = L.marker([50.10945167666594, 4.0759987263574775], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#FFCC00'
      })
    })
    .bindPopup('<h3>Votre Point De Départ Se Trouve Ici !</h3> <img src="./public/images/2.chateaumotte.jpg"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio viverra, venenatis diam non, euismod dolor. Donec et ex ligula. Fusce blandit semper leo sit amet viverra. Suspendisse interdum, lacus in commodo tincidunt, velit nulla condimentum ipsum, a condimentum ex odio sit amet nunc. </p>')
    .addTo(map);


// Point d'arrêt 3:
var marker4 = L.marker([50.0653002591314, 4.377789030370332], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#FFCC00'
      })
    })
    .bindPopup('<h4>Votre Point De Départ Se Trouve Ici !</h4> <img src="./public/images/4.parc_avesnois.jpg"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio viverra, venenatis diam non, euismod dolor. Donec et ex ligula. Fusce blandit semper leo sit amet viverra. Suspendisse interdum, lacus in commodo tincidunt, velit nulla condimentum ipsum, a condimentum ex odio sit amet nunc. </p>')
    .addTo(map)



// Point d'arrêt 4:
var marker5 = L.marker([50.192444091498146, 4.381530624511091], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#FFCC00'
      })
    })
    .bindPopup('<h5>Votre Point De Départ Se Trouve Ici !</h5> <img src="./public/images/6.best_western_lake_plus.jpg"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio viverra, venenatis diam non, euismod dolor. Donec et ex ligula. Fusce blandit semper leo sit amet viverra. Suspendisse interdum, lacus in commodo tincidunt, velit nulla condimentum ipsum, a condimentum ex odio sit amet nunc. </p>')
    .addTo(map)


// Point d'arrêt 5:
var marker6 = L.marker([50.365945960523945, 4.333386297533298], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#FFCC00'
      })
    })
    .bindPopup('<h6>Votre Point De Départ Se Trouve Ici !</h6> <img src="./public/images/1.gare_charleroi.jpg"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio viverra, venenatis diam non, euismod dolor. Donec et ex ligula. Fusce blandit semper leo sit amet viverra. Suspendisse interdum, lacus in commodo tincidunt, velit nulla condimentum ipsum, a condimentum ex odio sit amet nunc. </p>')
    .addTo(map)


// Lines start: 

var line_points = [
    [50.404948508622894, 4.438733655206532],
    [50.3643172348966, 4.284067953354553],
    [50.10945167666594, 4.0759987263574775],
    [50.0653002591314, 4.377789030370332],
    [50.192444091498146, 4.381530624511091],
    [50.365945960523945, 4.333386297533298],
    [50.404948508622894, 4.438733655206532]

]

// Define polyline options
// http://leafletjs.com/reference.html#polyline
var polyline_options = {
    color: '#FFCC00'
};

// Defining a polygon here instead of a polyline will connect the
// endpoints and fill the path.
// http://leafletjs.com/reference.html#polygon
var polyline = L.polyline(line_points, polyline_options).addTo(map);

// Lines end
