// Constants which are declared here are for hard-coded locations, used with buttons on Home page
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

//Google places autocomplete function adapted from Places documentation for this project. The function adds the Google Autocomplete feature 
//to an input field which then suggests places to the user as they type. This function then passes the coordinates of the chosen location to the findNearby function.


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

        //Google Place's requests return objects which can be dissected to determine the coordinates and many other details. Here the coordinates are taken and passed to the findNearby function
        var locationLatitude = place.geometry.location.lat();
        var locationLongitude = place.geometry.location.lng();
        findNearby(locationLatitude, locationLongitude);
    }
}

//This function is called at the beginning to draw a map when the page initially loads with a zoomed out view of most of Europe
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.24324,
            lng: 19.30265
        },
    });
}

// This function takes two arguments for location from the selection made by the user. A request is made to Google's "nearby search" feature based on this location.
//Request parameters are location, radius and type of thing to look for. The results are given to a callback function which is then used to display this on the DOM for the user.
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
        type: ['tourist_attraction']
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


    //The following functions are almost identical except that they display the information in different places on the DOM. Best practice would be to reuse the function
    // however because it is a callback from the nearbySearch function it proved difficult to pass the DOM destination as an extra parameter.
    // The DOM location is set to blank so that every new search only gives those results. Status is checked to see if Google returns an 'OK' before iterating over the returned object array
    function callback(results, status) {
        document.getElementById("dining-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                $("#dining-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
}

    function churchSearch(results, status) {
        document.getElementById("churches-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                $("#churches-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
    }

    function barSearch(results, status) {
        document.getElementById("bars-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                $("#bars-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
            }
        }
    }

    function poiSearch(results, status) {
        document.getElementById("poi-info").innerHTML = "";
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
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


//The following functions call the findNearby function and pass it the hard-coded locations declared globally at the top of the script. This lets the user click a location
// button and get all the information without having to manually search it 

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