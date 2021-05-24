const france = {lat: 48.864716, lng: 2.349014};
const italy = {lat: 41.8719 , lng: 12.5674 };
const spain = {lat: 40.4637, lng: 3.7492};
const germany = {lat: 51.1657, lng: 10.4515};
const england = {lat: 53.5500, lng: 2.4333};

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

$("#france").click(function(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: france,
        zoom: 8,
    });
});

$("#italy").click(function(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: italy,
        zoom: 8,
    });
});

$("#spain").click(function(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: spain,
        zoom: 8,
    });
});

$("#germany").click(function(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: germany,
        zoom: 5,
    });
});

$("#england").click(function(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: england,
        zoom: 8,
    });
});


function initMap() {
  const map = new google.maps.Map(document.getElementById("second-map"), {
    zoom: 7,
    center: { lat: -34.397, lng: 150.644 },
  });
  const geocoder = new google.maps.Geocoder();
  $("#submit").click(function(){
      geocodeAddress(geocoder,map);
  });
  /*
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
  */
}

function geocodeAddress(geocoder, resultsMap) {
  const address = $("#address").val(); //document.getElementById("address").value;
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

