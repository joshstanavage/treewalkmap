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

var mymap = L.map('mapid').setView([72.2573872, 41.808 ], 15.91);
L.tileLayer('https://api.mapbox.com/styles/v1/jstanavage/ckgfk17wv86e419qti0wfv98l.html?fresh=true&title=view&access_token=pk.eyJ1IjoianN0YW5hdmFnZSIsImEiOiJja2dmanh5bHIwc2g4MnFwZHp2eDJybTB1In0.hVi2olDE2ekOv_8Vq3L4cw',  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianN0YW5hdmFnZSIsImEiOiJja2dmanh5bHIwc2g4MnFwZHp2eDJybTB1In0.hVi2olDE2ekOv_8Vq3L4cw'
}).addTo(mymap);