window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

var mymap = L.map('mapid').setView([41.8084891,-72.2562546 ], 15.9);
L.tileLayer('https://api.mapbox.com/styles/v1/jstanavage/ckgfk17wv86e419qti0wfv98l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianN0YW5hdmFnZSIsImEiOiJja2dmanh5bHIwc2g4MnFwZHp2eDJybTB1In0.hVi2olDE2ekOv_8Vq3L4cw',  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianN0YW5hdmFnZSIsImEiOiJja2dmanh5bHIwc2g4MnFwZHp2eDJybTB1In0.hVi2olDE2ekOv_8Vq3L4cw',
  }).addTo(mymap);

 map.locate({setView: true, maxZoom: 16});
  function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);

