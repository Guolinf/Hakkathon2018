var hexgrid = [];
// Initialize and add the map
function initMap() {
// The location of Uluru

    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lng: -21.926735, lat : 64.123924},
    scrollwheel: true,
    zoom: 15,
    });

    var script = document.createElement('script');
    
    google.maps.event.addListener(map, 'bounds_changed', function() {
        var bounds = map.getBounds()
        var upLeftlng = bounds.b.b
        var upLeftlat = bounds.f.b
        var downRightlng = bounds.b.f
        var downRightlat = bounds.f.f
        var str = 'http://157.157.9.120/litter?latmin='+ upLeftlat+'&latmax='+downRightlat+'&lonmin='+upLeftlng+'&lonmax='+ downRightlng;
        map.data.loadGeoJson(str);
    });
    
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





    