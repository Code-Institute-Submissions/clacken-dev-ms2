//const apiKey = AIzaSyDcnmYkEEWSVtN4OKvL4M_K0cZcX_1kUZw;

//const currentLocation;


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

//This is the start of the places test 
var map;
var service;
var infowindow;

function initialize() {
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    var request = {
        location: pyrmont,
        radius: '500',
        type: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].name);
        }
    }
}

//This is the end of the places test

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8,
    });
    console.log("The initMap function is finished executing");
}

$("#restaurants").click(function () {


    var position = france;



    var request = {
        location: position,
        radius: '500',
        type: ['restaurant']
    }

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //createMarker(results[i]);
                console.log(results[i].name);
            }
        }
    }
});

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





//Moovit transport app initialise function
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = "https://widgets.moovit.com/wtp/en";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'moovit-jsw'));

//Google places autocomplete 

let autocomplete;

function initAutoComplete() {
    initMap();
    console.log('autocomplete function was called');
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'), {

            fields: ['geometry', 'address_components', 'formatted_address', 'name']
        });

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    console.log("place change function called");
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

        console.log(place.formatted_address);
        console.log("The ID of the requested place is " + place.place_id);
        geocodeAddress(map, place.formatted_address);
        

        // *** test to see if geometry location can be retrieved using Places library ***
        // var currentPlace = google.maps.places.PlaceGeometry();
        // console.log(currentPlace);
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

// Geocoding function for finding locations typed by the user
function geocodeAddress(resultsMap, address) {
    //const address = $("#address").val(); //document.getElementById("address").value;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: address
    }, (results, status) => {
        if (status === "OK") {
            resultsMap.setCenter(results[0].geometry.location);
            console.log(results[0]);
            //console.log("The id of this location is " + results[0].place_id);
            geocodePlaceId(results[0].place_id);
            
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

//experiment of trying to get lat and long for a place ID

function geocodePlaceId(placeId) {
    console.log("geocode place id function was called");
    const geocoder = new google.maps.Geocoder();


    geocoder.geocode({
        placeId: placeId
    }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                console.log("the coordinates for the provided place id are " + results[0].geometry.location);
            }
        } else {
            console.log("Geocoder failed due to: " + status);
        }
    });

}