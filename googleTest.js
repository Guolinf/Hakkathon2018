var hexgrid = [];
// Initialize and add the map
function initMap() {
// The location of Uluru

    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lng: -21.926735, lat : 64.123924},
    scrollwheel: true,
    zoom: 11,
    });

    var script = document.createElement('script');

    map.data.setStyle(function(feature) {
      var color = 'gray';
      if (feature.getProperty('fill')) {
        color = feature.getProperty('fill');
      }
      return /** @type {!google.maps.Data.StyleOptions} */({
        fillColor: color,
        fillOpacity: 0.2,
        strokeWeight: 0
      });
    });
    

    google.maps.event.addListener(map, 'bounds_changed', function() {
        var bounds = map.getBounds()
        var upLeftlng = bounds.b.b
        var upLeftlat = bounds.f.b
        var downRightlng = bounds.b.f
        var downRightlat = bounds.f.f
        var str = 'http://157.157.9.120/litter?latmin='+ upLeftlat+'&latmax='+downRightlat+'&lonmin='+upLeftlng+'&lonmax='+ downRightlng;
        map.data.loadGeoJson(str);
    });
    var str = 'http://157.157.9.120/bins'
    map.data.loadGeoJson(str);
    
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
     });
     
     function placeMarker(location) {
         var marker = new google.maps.Marker({
             position: location, 
             map: map
         });
     }
}





    
