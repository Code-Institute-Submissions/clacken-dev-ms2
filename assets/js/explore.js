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
         zoom: 6,
     });
 }