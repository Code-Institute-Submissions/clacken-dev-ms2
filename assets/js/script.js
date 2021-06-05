const france = {
    lat: 48.864716,
    lng: 2.349014
};
const italy = {
    lat: 41.8719,
    lng: 12.5674
};
const spain = {
    lat: 40.4637,
    lng: 3.7492
};
const germany = {
    lat: 51.1657,
    lng: 10.4515
};
const england = {
    lat: 53.5500,
    lng: 2.4333
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


$("#france").click(function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: france,
        zoom: 8,
    });
});

$("#italy").click(function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: italy,
        zoom: 8,
    });
});

$("#spain").click(function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: spain,
        zoom: 8,
    });
});

$("#germany").click(function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: germany,
        zoom: 5,
    });
});

$("#england").click(function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: england,
        zoom: 8,
    });
});


