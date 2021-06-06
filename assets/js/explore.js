 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition)
     } else {
         alert("Sorry! your browser is not supporting")
     }
 }

 function showPosition(position) {
     map = new google.maps.Map(document.getElementById("map"), {
         center: {
             lat: position.coords.latitude,
             lng: position.coords.longitude
         },
         zoom: 12,
     });

     new google.maps.Marker({
         map: map,
         position: {
             lat: position.coords.latitude,
             lng: position.coords.longitude
         },
     });

     findNearby(position.coords.latitude, position.coords.longitude);
 }

     //Moovit transport app initialise function
     (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        var ro = !!d.getElementById(id);
        js = d.createElement(s); js.id = id;
        js.src = "https://widgets.moovit.com/ws/C4027C9DA9F96060E0530100007F6287/4070102";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'moovit-jsw');


function findNearby(latitude, longitude) {

    var position = {
        lat: latitude,
        lng: longitude
    };

    var cars = {
        location: position,
        radius: '1000',
        type: ['car_rental']
    }

    var churches = {
        location: position,
        radius: '1000',
        type: ['church']
    }

    var bars = {
        location: position,
        radius: '1000',
        type: ['bar']
    }

    var poi = {
        location: position,
        radius: '5000',
        type: ['tourist_attraction']
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: latitude,
            lng: longitude
        },
    });

    new google.maps.Marker({
                map: map,
                position: {lat: latitude, lng: longitude},
            });

    service = new google.maps.places.PlacesService(map);
    var diningSection = document.getElementById("dining-info");
    service.nearbySearch(cars, callback);
    service.nearbySearch(churches, churchSearch);
    service.nearbySearch(bars, barSearch);
    service.nearbySearch(poi, poiSearch);

    function callback(results, status) {
        document.getElementById("car-info").innerHTML = "";
        var returnedNames = [];
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //createMarker(results[i]);
                
                //console.log(results[i].name);
                returnedNames.push(results[i].name);
                
                
                $("#car-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
}

    function churchSearch(results, status) {
        document.getElementById("churches-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //createMarker(results[i]);
                
                $("#churches-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
    }

    function barSearch(results, status) {
        document.getElementById("bars-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //createMarker(results[i]);
                
                //console.log(results[i].name);
                
                $("#bars-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
    }

    function poiSearch(results, status) {
        document.getElementById("poi-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //createMarker(results[i]);
                
                //console.log(results[i].name);
                $("#poi-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
    }
};

 //Function to create the Moovit map, taken from Moovit documentation
 (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                js = d.createElement(s);
                js.id = id;
                js.src = "https://widgets.moovit.com/wtp/en";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'moovit-jsw'));