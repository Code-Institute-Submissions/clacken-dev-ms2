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
         zoom: 10,
     });

     new google.maps.Marker({
         map: map,
         position: {
             lat: position.coords.latitude,
             lng: position.coords.longitude
         },
     });

     findNearby(position.coords.latitude, position.coords.longitude);
     addMoovit(position.coords.latitude, position.coords.longitude);
 }



 function addMoovit(lat, long) {
     var latLong = String(lat) + "," + String(long);
     console.log(latLong);

     $("#moovit-travel").html(
         "<h3>This is from the JQuery function</h3>"
         `<div class="mv-wtp" data-metro="121" data-lang="en" data-from=""
           data-from-lat-long=${latLong} data-to="" data-to-lat-long=""
           id="moovit-interface">
       </div>`
     )

     //Moovit transport app initialise function
     (function (d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         js = d.createElement(s);
         js.id = id;
         js.src = "https://widgets.moovit.com/wtp/en";
         fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'moovit-jsw'));
 }


 // Testing of tourism APIs is below this line *******
 function findNearby(latitude, longitude) {
     const settings = {
         "async": true,
         "crossDomain": true,
         "url": `https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?lat=${latitude}&lon=${longitude}&radius=500`,
         "method": "GET",
         "headers": {
             "x-rapidapi-key": "fe33473186msh890ac52503a61f8p135579jsn39564cd53330",
             "x-rapidapi-host": "opentripmap-places-v1.p.rapidapi.com"
         }
     };

     $.ajax(settings).done(function (response) {
         console.log(response);
     });
 }