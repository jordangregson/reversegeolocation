function geocodeLatLng(geocoder, map, infowindow) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
            })
    }
    geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                map.setZoom(11);
                const marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
                console.log(results[0].formatted_address);
            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}

geocodeLatLng();