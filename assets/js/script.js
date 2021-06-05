const paris = {
    lat: 48.864716,
    lng: 2.349014
};
const rome = {
    lat: 41.902782,
    lng: 12.496366
};
const dublin = {
    lat: 53.350140,
    lng: -6.266155
};
const madrid = {
    lat: 40.416775,
    lng: -3.703790
};
const newYork = {
    lat: 40.730610,
    lng: -73.935242
};

const london = {
    lat: 51.509865,
    lng: -0.118092
};

//Google places autocomplete 

let autocomplete;

function initAutoComplete() {
    initMap();
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'), {

            fields: ['geometry', 'address_components', 'formatted_address', 'name']
        });

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {

    var place = autocomplete.getPlace();

    if (!place.geometry) {
        //User did not select a prediction; reset the input field
        document.getElementById('address').placeholder =
            'enter a place';
    } else {
        //Display details about the valid place


        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: -34.397,
                lng: 150.644
            },
        });

        var locationLatitude = place.geometry.location.lat();
        var locationLongitude = place.geometry.location.lng();
        findNearby(locationLatitude, locationLongitude);
    }
}


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.24324,
            lng: 19.30265
        },
    });
}

function findNearby(latitude, longitude) {

    var position = {
        lat: latitude,
        lng: longitude
    };

    var restaurant = {
        location: position,
        radius: '1000',
        type: ['restaurant']
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
        type: ['point_of_interest']
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
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
    service.nearbySearch(restaurant, callback);
    service.nearbySearch(churches, churchSearch);
    service.nearbySearch(bars, barSearch);
    service.nearbySearch(poi, poiSearch);

    function callback(results, status) {
        document.getElementById("dining-info").innerHTML = "";
        var returnedNames = [];
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //createMarker(results[i]);
                
                //console.log(results[i].name);
                returnedNames.push(results[i].name);
                
                
                $("#dining-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
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

// Adapted from 'https://howtodoinjava.com/jquery/jquery-detect-if-enter-key-is-pressed/' to let the user know they can't use the enter key on the search bar
$('#address').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        alert('Please select a location from the dropdown list.');  
    }
});

$("#paris").click(function(){
    findNearby(paris.lat, paris.lng);
});

$("#rome").click(function(){
    findNearby(rome.lat, rome.lng);
});

$("#dublin").click(function(){
    findNearby(dublin.lat, dublin.lng);
});

$("#madrid").click(function(){
    findNearby(madrid.lat, madrid.lng);
});

$("#new-york").click(function(){
    findNearby(newYork.lat, newYork.lng);
});

$("#london").click(function(){
    findNearby(london.lat, london.lng);
});