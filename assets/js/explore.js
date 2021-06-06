 //The getLocation function was adapted from W3Schools documentation on obtaining user location. It checks if the browser supports geolocation and then proceeds appropriately.
 //The location as returned from the geolocation is used to draw a new Google Map and this then calls the same findNearby function from script.js and searches nearby for attractions

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

 //this function takes two arguments for location and uses them for the nearby search and for the radius location to search. A new map and marker is drawn once this function is called and then it invokes
 // Google places functionality to implement the services for Nearby Search. 
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
         position: {
             lat: latitude,
             lng: longitude
         },
     });

     service = new google.maps.places.PlacesService(map);
     var diningSection = document.getElementById("dining-info");
     service.nearbySearch(cars, callback);
     service.nearbySearch(churches, churchSearch);
     service.nearbySearch(bars, barSearch);
     service.nearbySearch(poi, poiSearch);

     //The following functions are very similar but differ in the DOM location they are appending to. Best practice may be to amend into one function and pass DOM location as an argument
     function callback(results, status) {
         document.getElementById("car-info").innerHTML = "";
         var returnedNames = [];
         if (status == google.maps.places.PlacesServiceStatus.OK) {
             for (var i = 0; i < results.length; i++) {
                 $("#car-info").append(`<p class ='information-item'> ${results[i].name} </p>`);
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

 //This function was taken from Moovit Transport documentation and embeds a widget in the page which can be used by the user to enter destinations to search for travel options
 (function (d, s, id) {
               var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s);
               js.id = id;
               js.src = "https://widgets.moovit.com/wtp/en";
               fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'moovit-jsw'));

 
 