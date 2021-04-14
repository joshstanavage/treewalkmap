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
 
  var polygon = L.polygon([
    [41.8080653,-72.2565765],
    [41.8069057,-72.2553641],
    [41.8069937,-72.2552139],
    [41.8069457,-72.2551388],
    [41.8070416,-72.2550315],
    [41.8071296,-72.2550208],
    [41.8074415,-72.2545273],
    [41.8077054,-72.2548491],
    [41.8082812,-72.2538943],
    [41.8080733,-72.2536689],
    [41.8080973,-72.2533685],
    [41.8081692,-72.2529716],
    [41.8081772,-72.2528643],
    [41.8084971,-72.2523171],
    [41.8090528,-72.2513226],
    [41.8092127,-72.2510973],
    [41.8093247,-72.2513333],
    [41.8094206,-72.2514514],
    [41.8095006,-72.2515157],
    [41.8097005,-72.2517518],
    [41.8097693,-72.251831],
    [41.8098693,-72.2517881],
    [41.8100772,-72.252051],
    [41.8102371,-72.2522226],
    [41.8103171,-72.2522387],
    [41.8103651,-72.2521422],
    [41.810433,-72.2519866],
    [41.8101811,-72.2517613],
    [41.8100452,-72.2515467],
    [41.8099692,-72.2514233],
    [41.8098533,-72.2512892],
    [41.8096297,-72.2511075],
    [41.8095177,-72.2509573],
    [41.8094137,-72.2507856],
    [41.8093418,-72.2506783],
    [41.8092778,-72.2507427],
    [41.8091818,-72.2507105],
    [41.8090619,-72.2507535],
    [41.8089419,-72.2507535],
    [41.80883,-72.2506891],
    [41.808718,-72.2506032],
    [41.8084781,-72.2505818],
    [41.8083102,-72.2505925],
    [41.8082062,-72.2505389],
    [41.8083421,-72.2503672],
    [41.8084141,-72.2501848],
    [41.8084061,-72.2500561],
    [41.8083741,-72.2499381],
    [41.8082782,-72.2498522],
    [41.8081262,-72.249702],
    [41.8076784,-72.2494016],
    [41.8075344,-72.2496377],
    [41.8070527,-72.2494396],
    [41.8069367,-72.249386],
    [41.8068887,-72.249386],
    [41.8067528,-72.2496703],
    [41.8067119,-72.2497419],
    [41.8066639,-72.2497258],
    [41.8065999,-72.2496561],
    [41.8065319,-72.249581],
    [41.8064919,-72.2495327],
    [41.8064919,-72.2494683],
    [41.8065839,-72.249302],
    [41.8058945,-72.2503769],
    [41.8057906,-72.2502588],
    [41.8055506,-72.2506665],
    [41.8061185,-72.2497439],
    [41.8059025,-72.2494327],
    [41.8058146,-72.249304],
    [41.8056466,-72.2491645],
    [41.8055107,-72.2489606],
    [41.8053427,-72.2487675],
    [41.8054687,-72.2485925],
    [41.8056406,-72.2483619],
    [41.8051896,-72.2474128],
    [41.8053815,-72.2470373],
    [41.8054108,-72.2467634],
    [41.8054188,-72.2465918],
    [41.8054088,-72.2464711],
    [41.8053822,-72.2463691],
    [41.8053482,-72.2463262],
    [41.8052922,-72.2462887],
    [41.8049994,-72.246117],
    [41.8049234,-72.2460849],
    [41.8048935,-72.246061],
    [41.8049615,-72.2459725],
    [41.8050295,-72.2459807],
    [41.8050814,-72.24586],
    [41.8046915,-72.2455488],
    [41.8046835,-72.2454791],
    [41.8048435,-72.2451197],
    [41.8049555,-72.2451197],
    [41.8050514,-72.2452055],
    [41.8052114,-72.2452967],
    [41.8052714,-72.2453611],
    [41.8053353,-72.2455971],
    [41.8053473,-72.2459404],
    [41.8053793,-72.2460584],
    [41.8053793,-72.2461496],
    [41.8053553,-72.246273],
    [41.8054073,-72.2463749],
    [41.8054353,-72.2464661],
    [41.8054393,-72.2465681],
    [41.8054433,-72.2466539],
    [41.8054633,-72.2467612],
    [41.8054873,-72.2468363],
    [41.8056822,-72.2467149],
    [41.8057302,-72.2465862],
    [41.8057702,-72.2464467],
    [41.8058502,-72.2466935],
    [41.8059222,-72.246833],
    [41.8059941,-72.2469939],
    [41.8060341,-72.2471334],
    [41.8060821,-72.2472621],
    [41.8061941,-72.2474338],
    [41.806274,-72.2475947],
    [41.806338,-72.2477985],
    [41.8066105,-72.2484172],
    [41.8068264,-72.2486532],
    [41.8069384,-72.2487176],
    [41.8073143,-72.2487176],
    [41.8074742,-72.2486747],
    [41.8077081,-72.2486612],
    [41.8078261,-72.2485835],
    [41.808046,-72.2487632],
    [41.8082099,-72.2487068],
    [41.8083539,-72.2486639],
    [41.8085458,-72.2485996],
    [41.8089377,-72.2490394],
    [41.8093855,-72.2493613],
    [41.8098654,-72.249876],
    [41.8104411,-72.2505198],
    [41.8106251,-72.2502194],
    [41.8109689,-72.2499082],
    [41.8112088,-72.2497044,],
    [41.8113448,-72.2496186],
    [41.810721,-72.2490714],
    [41.810897,-72.2489104],
    [41.8110489,-72.2485457],
    [41.8113288,-72.2479663],
    [41.8122924,-72.2487924],
    [41.8128281,-72.2492538],
    [41.8123084,-72.2503481],
    [41.8120285,-72.2499619],
    [41.8117966,-72.2496937],
    [41.8116686,-72.2499189],
    [41.8115909,-72.2500908],
    [41.8114973,-72.2503807],
    [41.8114174,-72.2510459],
    [41.8114374,-72.251408],
    [41.8112814,-72.2514268],
    [41.8113414,-72.251872],
    [41.8114334,-72.252489],
    [41.8114454,-72.2530414],
    [41.8113894,-72.2534706],
    [41.8113471,-72.2539704],
    [41.8113192,-72.2542171],
    [41.8111833,-72.2548608],
    [41.8110473,-72.25529],
    [41.8109354,-72.2556547],
    [41.8107674,-72.2561161],
    [41.8105515,-72.2567598],
    [41.8106955,-72.2568564],
    [41.8108314,-72.2570388],
    [41.8106555,-72.2574035],
    [41.8106075,-72.2571139],
    [41.8106555,-72.2569315],
    [41.8106775,-72.2568617],
    [41.8105315,-72.2567705],
    [41.8103856,-72.2566632],
    [41.8101577,-72.2565238],
    [41.8101097,-72.256454],
    [41.8100697,-72.2563414],
    [41.8102216,-72.255923],
    [41.8101697,-72.2558961],
    [41.8100257,-72.2563146],
    [41.8097938,-72.2562341],
    [41.8096819,-72.2561375],
    [41.8095411,-72.2559413],
    [41.8095091,-72.2559413],
    [41.8094371,-72.2558635],
    [41.8092972,-72.2560808],
    [41.8091672,-72.2562256],
    [41.8089977,-72.2563939],
    [41.8088978,-72.2565601],
    [41.8088138,-72.2567157],
    [41.8087578,-72.256882],
    [41.8087058,-72.2570161],
    [41.8086339,-72.2569625],
    [41.8085579,-72.256882],
    [41.8085199,-72.2568498],
    [41.8084259,-72.2570161],
    [41.808422,-72.2571181],
    [41.808292,-72.2571154],
    [41.808263,-72.2569263],
    [41.808202,-72.2567908],
    [41.8080901,-72.2566299],
  ]).addTo(mymap);

  polygon.setStyle({
    color: '#BF8C8B',
    fillColor: '#000',
    fillOpacity: 0,
    weight: '4'
    
});

var firstIcon = L.icon({
  title: "London Plane",
  iconUrl: 'img/markers/markers-01.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});
L.marker([41.8081106, -72.2567718], {icon: firstIcon}).addTo(mymap);
L.marker([41.8081106, -72.2567718], {icon: firstIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-01.png'> </div> <div class='flex1'> <h2 id='overidesmall'>London Plane</h2> <h5 class='closertitle' >Platanus x acerifolia </h5> <p> <em>Look for: </em> Olive-green to creamy bark color, Simple green 6-7 inch leaves</p> <a class='linky' href='trees/01-london-planetree.html'> <p> More on London Planetree  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var secondIcon = L.icon({
  title: "Yellow Buckeye",
  iconUrl: 'img/markers/markers-02.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8069631, -72.2549793], {icon: secondIcon}).addTo(mymap);
L.marker([41.8069631, -72.2549793], {icon: secondIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-02.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Yellow Buckeye</h2> <h5 class='closertitle' >#6081 | Aesculus flava </h5> <p> <em>Look for: </em> Gray/brown bark with flat plates comprising old trunks, dark green leaves (5-leaflets)</p> <a class='linky' href='trees/02-yellow-buckeye.html'> <p> More on Yellow Buckeye  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var thirdIcon = L.icon({
  title: "Katsuratree",
  iconUrl: 'img/markers/markers-03.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8081228, -72.2543582], {icon: thirdIcon}).addTo(mymap);
L.marker([41.8081228, -72.2543582], {icon: thirdIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-03.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Katsuratree</h2> <h5 class='closertitle' >#6094 | Cercidiphyllum	japonicum </h5> <p> <em>Look for: </em> Brown, slightly shaggy bark on older trunks, 2-4 inch broad ovate dark-bluish leaves</p> <a class='linky' href='trees/03-katsuratree.html'> <p> More on Katsuratree  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var fourthIcon = L.icon({
  title: "Umbrella Pine",
  iconUrl: 'img/markers/markers-04.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8082999, -72.2524214], {icon: fourthIcon}).addTo(mymap);
L.marker([41.8082999, -72.2524214], {icon: fourthIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-04.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Umbrella Pine</h2> <h5 class='closertitle' >#5617 | Sciadopitys verticillata </h5> <p> <em>Look for: </em> Rich Orangish to reddish brown bark, glossy dark green whorls of 20-30 linear flat leaves</p> <a class='linky' href='trees/04-umbrella-pine.html'> <p> More on Umbrella Pine  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var fiveIcon = L.icon({
  title: "Japanese Pagoda Tree",
  iconUrl: 'img/markers/markers-05.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8087077, -72.2520218], {icon: fiveIcon}).addTo(mymap);
L.marker([41.8087077, -72.2520218], {icon: fiveIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-05.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Japanese Pagoda Tree</h2> <h5 class='closertitle' >#5502 | Styphnolobium	japonicum </h5> <p> <em>Look for: </em> Pinnate leaves (to 10” long), each with 7-17 oval, lustrous, dark green leaflets.</p> <a class='linky' href='trees/05-japanese-pagoda.html'> <p> More on Japanese Pagoda Tree  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var sixIcon = L.icon({
  title: "Chinese Quince",
  iconUrl: 'img/markers/markers-06.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8088984, -72.2517853], {icon: sixIcon}).addTo(mymap);
L.marker([41.8088984, -72.2517853], {icon: sixIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-06.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Chinese Quince</h2> <h5 class='closertitle' >#5503 | Pseudocydonia	sinensis </h5> <p> <em>Look for: </em> Mosaic green/brown bark with 2.5-4.5 inch oval dark green (above), pale green (below) leaves </p> <a class='linky' href='trees/06-chinese-quince.html'> <p> More on Chinese Quince  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var sevenIcon = L.icon({
  title: "Shingle Oak",
  iconUrl: 'img/markers/markers-07.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8088124, -72.2516029], {icon: sevenIcon}).addTo(mymap);
L.marker([41.8088124, -72.2516029], {icon: sevenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-07.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Shingle Oak</h2> <h5 class='closertitle' >#5507 | Quercus	imbricaria </h5> <p> <em>Look for: </em> Gray-brown bark with low ridges seperated by shallow furrows, Oblong dark green (above), pale green (below) leaves </p> <a class='linky' href='trees/07-shingle-oak.html'> <p> More on Shingle Oak  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var eightIcon = L.icon({
  title: "Chinese Elm",
  iconUrl: 'img/markers/markers-08.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8098507, -72.2516655], {icon: eightIcon}).addTo(mymap);
L.marker([41.8098507, -72.2516655], {icon: eightIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-08.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Chinese Elm</h2> <h5 class='closertitle' >#5257 | Ulmus	parvifolia </h5> <p> <em>Look for: </em> Mottled bark, exfoliating in irregular patches, short .75-2.5 inch dark green leaves, late-summer flowers/fruit </p> <a class='linky' href='trees/08-chinese-elm.html'> <p> More on Chinese Elm  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var nineIcon = L.icon({
  title: "Common Hackberry",
  iconUrl: 'img/markers/markers-09.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8100287, -72.2520384], {icon: nineIcon}).addTo(mymap);
L.marker([41.8100287, -72.2520384], {icon: nineIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-09.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Common Hackberry</h2> <h5 class='closertitle' >#10429 | Celtis	occidentalis </h5> <p> <em>Look for: </em> Narrow corky projecting ridges on bark, bright green 2-5 inch ovate leaves </p> <a class='linky' href='trees/09-common-hackberry.html'> <p> More on Common Hackberry  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var tenIcon = L.icon({
  title: "White Oak",
  iconUrl: 'img/markers/markers-10.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8095062, -72.2505769], {icon: tenIcon}).addTo(mymap);
L.marker([41.8095062, -72.2505769], {icon: tenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-10.png'> </div> <div class='flex1'> <h2 id='overidesmall'>White Oak</h2> <h5 class='closertitle' >#5266 | Quercus	alba </h5> <p> <em>Look for: </em> Light-ashy bark with narrow ridges, obovate 4-8.5 inch bluish-green leaves</p> <a class='linky' href='trees/10-white-oak.html'> <p> More on White Oak  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var elevenIcon = L.icon({
  title: "Black Tupelo",
  iconUrl: 'img/markers/markers-11.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8092822, -72.2506949], {icon: elevenIcon}).addTo(mymap);
L.marker([41.8092822, -72.2506949], {icon: elevenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-13.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Black Tupelo</h2> <h5 class='closertitle' >#5270 | Nyssa	sylvatica </h5> <p> <em>Look for: </em> Dark gray/brown with irregular ridges/alligator hide appearance, Ovate dark 3-6 inch green leaves </p> <a class='linky' href='trees/11-black-tupelo.html'> <p> More on Black Tupelo  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var twelveIcon = L.icon({
  title: "Panicled Goldenraintree",
  iconUrl: 'img/markers/markers-12.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8085249, -72.2505099], {icon: twelveIcon}).addTo(mymap);
L.marker([41.8085249, -72.2505099], {icon: twelveIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-11.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Panicled Goldenraintree</h2> <h5 class='closertitle' >#5520 | Koelreuteria	paniculata </h5> <p> <em>Look for: </em> Light gray/brown trunk, bipinnately compound, 6-18 inch long with 7-15 rich green leaflets, incisely lobed</p> <a class='linky' href='trees/12-panicled-goldenraintree.html'> <p> More on Panicled Goldenraintree  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var thirteenIcon = L.icon({
  title: "Japanese Maple cultivar",
  iconUrl: 'img/markers/markers-13.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8082966, -72.2497952], {icon: thirteenIcon}).addTo(mymap);
L.marker([41.8082966, -72.2497952], {icon: thirteenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-12.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Japanese Maple cultivar</h2> <h5 class='closertitle' >#5539 | Acer	palmatum </h5> <p> <em>Look for: </em> Simple 2-5 inch long/wide with deeply 5- to 7- to 9-lobed, leaves emerge early</p> <a class='linky' href='trees/13-japanese-maple.html'> <p> More on Japanese Maple cultivar  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var fourteenIcon = L.icon({
  title: "European Beech Cultivar",
  iconUrl: 'img/markers/markers-14.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8071042, -72.2495808], {icon: fourteenIcon}).addTo(mymap);
L.marker([41.8071042, -72.2495808], {icon: fourteenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-14.png'> </div> <div class='flex1'> <h2 id='overidesmall'>European Beech cultivar</h2> <h5 class='closertitle' >#6372 | Fagus	sylvatica </h5> <p> <em>Look for: </em> 2-4 inch long elliptic dark green leaves, smooth gray bark with elephant hide appearance</p> <a class='linky' href='trees/14-european-beech.html'> <p> More on European Beech cultivar  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var fifteenIcon = L.icon({
  title: "Seven-son Flower",
  iconUrl: 'img/markers/markers-15.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8066888, -72.2493072], {icon: fifteenIcon}).addTo(mymap);
L.marker([41.8066888, -72.2493072], {icon: fifteenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-15.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Seven-son Flower</h2> <h5 class='closertitle' >#6417 | Heptacodium	miconioides </h5> <p> <em>Look for: </em> 3-6 inch ovate-lanceolate dark green leaves, gray-brown exfoliating bark</p> <a class='linky' href='trees/15-sevenson-flower.html'> <p> More on Seven-son Flower  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var sixteenIcon = L.icon({
  title: "Sassafras",
  iconUrl: 'img/markers/markers-16.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.805584, -72.2504887], {icon: sixteenIcon}).addTo(mymap);
L.marker([41.805584, -72.2504887], {icon: sixteenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-16.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Sassafras</h2> <h5 class='closertitle' >#6751 | Sassafras	albidum </h5> <p> <em>Look for: </em> Ovate to elliptic 3-7 inch medium green leaves, mitten-shaped, Mahogany-brown, deeply-ridged bark  </p> <a class='linky' href='trees/16-sassafras.html'> <p> More on Sassafras  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var seventeenIcon = L.icon({
  title: "Cucumbertree Magnolia",
  iconUrl: 'img/markers/markers-17.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8058319, -72.2494237], {icon: seventeenIcon}).addTo(mymap);
L.marker([41.8058319, -72.2494237], {icon: seventeenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-17.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Cucumbertree Magnolia </h2> <h5 class='closertitle' >#6780 | Magnolia	acuminata </h5> <p> <em>Look for: </em> Oblong-ovate 4-10 inch dark green leaves, relatively smooth gray-brown bark  </p> <a class='linky' href='trees/17-cucumbertree-magnolia.html'> <p> More on Cucumbertree Magnolia  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var eighteenIcon = L.icon({
  title: "American Sweetgum",
  iconUrl: 'img/markers/markers-18.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8056057, -72.2476597], {icon: eighteenIcon}).addTo(mymap);
L.marker([41.8056057, -72.2476597], {icon: eighteenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-18.png'> </div> <div class='flex1'> <h2 id='overidesmall'>American Sweetgum </h2> <h5 class='closertitle' >#6912 | Liquidambar	styraciflua </h5> <p> <em>Look for: </em>5- to 7- lobed leaves with oblong triangular, star-shape, fruit resembles brown spikey balls </p> <a class='linky' href='trees/18-american-sweetgum.html'> <p> More on American Sweetgum  <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var nineteenIcon = L.icon({
  title: "Weeping Japanese Pagoda Tree",
  iconUrl: 'img/markers/markers-19.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8050734, -72.2457857], {icon: nineteenIcon}).addTo(mymap);
L.marker([41.8050734, -72.2457857], {icon: nineteenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-19.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Weeping Japanese Pagoda Tree </h2> <h5 class='closertitle' >#6927 | Styphnolobium	japonicum </h5> <p> <em>Look for: </em> Weeping form with pendent branches, seldom flowers </p> <a class='linky' href='trees/19-weeping-japanese-pagoda.html'> <p> More on Weeping Japanese Pagodatree <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentyIcon = L.icon({
  title: "Japanese White Pine",
  iconUrl: 'img/markers/markers-20.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8050054, -72.2452385], {icon: twentyIcon}).addTo(mymap);
L.marker([41.8050054, -72.2452385], {icon: twentyIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-20.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Japanese White Pine </h2> <h5 class='closertitle' >#7261 | Pinus	parviflora </h5> <p> <em>Look for: </em> Brush-like tufts at the end of branches, darker gray/scaley on old trunks </p> <a class='linky' href='trees/20-white-pine.html'> <p> More on Japanese White Pine <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentyoneIcon = L.icon({
  title: "Pitch Pine",
  iconUrl: 'img/markers/markers-21.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8064066, -72.2478307], {icon: twentyoneIcon}).addTo(mymap);
L.marker([41.8064066, -72.2478307], {icon: twentyoneIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-21.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Pitch Pine </h2> <h5 class='closertitle' >#5652 | Pinus	rigida </h5> <p> <em>Look for: </em> In three's, slightly curved 3-5 inch long yellow to green needles, brownish-yellow bark </p> <a class='linky' href='trees/21-pitch-pine.html'> <p> More on Pitch Pine <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentytwoIcon = L.icon({
  title: "Wisconsin Weeping Willow",
  iconUrl: 'img/markers/markers-22.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8067279, -72.2484164], {icon: twentytwoIcon}).addTo(mymap);
L.marker([41.8067279, -72.2484164], {icon: twentytwoIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-22.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Wisconsin Weeping Willow </h2> <h5 class='closertitle' >#5644 | Salix	x blanda </h5> <p> <em>Look for: </em> Dark green, bluntly toothed leaves, stems are olive-brown </p> <a class='linky' href='trees/22-wisconsin-weeping-willow.html'> <p> More on Wisconsin Weeping Willow <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentythreeIcon = L.icon({
  title: "Needle Fir",
  iconUrl: 'img/markers/markers-23.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8089248,  -72.2488459], {icon: twentythreeIcon}).addTo(mymap);
L.marker([41.8089248,  -72.2488459], {icon: twentythreeIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-23.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Needle Fir </h2> <h5 class='closertitle' >#5291 | Abies	holophylla </h5> <p> <em>Look for: </em> Pointed tips and slightly grooved stems with circular leaf scars </p> <a class='linky' href='trees/23-needle-fir.html'> <p> More on Needle Fir <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentyfourIcon = L.icon({
  title: "Tulip Tree",
  iconUrl: 'img/markers/markers-24.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.809437,  -72.2488759], {icon: twentyfourIcon}).addTo(mymap);
L.marker([41.809437,  -72.2488759], {icon: twentyfourIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-24.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Tuliptree </h2> <h5 class='closertitle' >#5153 | Liriodendron	tulipifera </h5> <p> <em>Look for: </em> 3 to 8 inches long/wide with short acuminate lobe on each side, gray bark furrowed into close </p> <a class='linky' href='trees/24-tuliptree.html'> <p> More on Tuliptree <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var twentyfiveIcon = L.icon({
  title: "Camperdown Elm",
  iconUrl: 'img/markers/markers-25.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8104873,  -72.250068], {icon: twentyfiveIcon}).addTo(mymap);
L.marker([41.8104873,  -72.250068], {icon: twentyfiveIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-25.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Camperdown Elm </h2> <h5 class='closertitle' >#5168 | Ulmus	glabra </h5> <p> <em>Look for: </em> 3-7 inch obovate long double serrate dark green leaves, usually gafted 6' to 7' on understock </p> <a class='linky' href='trees/25-camperdown-elm.html'> <p> More on Camperdown Elm <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var twentysixIcon = L.icon({
  title: "Maidenhair Tree",
  iconUrl: 'img/markers/markers-26.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8108868,  -72.24983], {icon: twentysixIcon}).addTo(mymap);
L.marker([41.8108868,  -72.24983], {icon: twentysixIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-26.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Maidenhair Tree </h2> <h5 class='closertitle' >#5186 | Ginkgo	biloba </h5> <p> <em>Look for: </em> Clusters of 3-5 fan-shaped leaves on spurs, gray-brown bark with dark furrows </p> <a class='linky' href='trees/26-maidenhair-tree.html'> <p> More on Maidenhair Tree<i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentysevenIcon = L.icon({
  title: "Kentucky Coffeetree",
  iconUrl: 'img/markers/markers-27.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8107888,  -72.2496503], {icon: twentysevenIcon}).addTo(mymap);
L.marker([41.8107888,  -72.2496503], {icon: twentysevenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-27.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Kentucky Coffeetree</h2> <h5 class='closertitle' >#5179 | Gymnocladus	dioicus </h5> <p> <em>Look for: </em> bipannately compound 3' wide, 2' wide with 3-7 pairs of pinnae, dark brown bark </p> <a class='linky' href='trees/27-kentucky-coffeetree.html'> <p> More on Kentucky Coffeetree <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentyeightIcon = L.icon({
  title: "Canadian Hemlock cultivar",
  iconUrl: 'img/markers/markers-28.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8106091,  -72.2490606], {icon: twentyeightIcon}).addTo(mymap);
L.marker([41.8106091,  -72.2490606], {icon: twentyeightIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-28.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Canadian Hemlock cultivar</h2> <h5 class='closertitle' >#5142 | Tsuga	canadensis </h5> <p> <em>Look for: </em> Soft, feathery evergreen needles are deep green with two parallel, whitish bands on the underside. Abundant small cones (½ to 1 inch long) that persist through winter. </p> <a class='linky' href='trees/28-canadian-hemlock.html'> <p> More on Canadian Hemlock Cultivar <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var twentynineIcon = L.icon({
  title: "Dawn Redwood",
  iconUrl: 'img/markers/markers-30.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8117892,  -72.2485754], {icon: twentynineIcon}).addTo(mymap);
L.marker([41.8117892,  -72.2485754], {icon: twentynineIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-29.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Dawn Redwood</h2> <h5 class='closertitle' >#5020 | Metasequoia	glyptostroboides </h5> <p> <em>Look for: </em> Redish-brown straight trunk turning darker with age, deciduous, armpit-like depressions directly below branch attachments </p> <a class='linky' href='trees/30-dawn-redwood.html'> <p> More on Dawn Redwood <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var thirtyIcon = L.icon({
  title: "European Larch cultivar",
  iconUrl: 'img/markers/markers-32.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8124128,  -72.2487533], {icon: thirtyIcon}).addTo(mymap);
L.marker([41.8124128,  -72.2487533], {icon: thirtyIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-30.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Varied Directions European Larch</h2> <h5 class='closertitle' >#5009 | Larix	decidua </h5> <p> <em>Look for: </em> Unusual Robust twigs that rise up and out, upright spreading habit of growth </p> <a class='linky' href='trees/32-varied-directions-european-larch.html'> <p> More on Varied Directions European Larch <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var thirtyoneIcon = L.icon({
  title: "Castor-aralia",
  iconUrl: 'img/markers/markers-33.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8127606,  -72.2492683], {icon: thirtyoneIcon}).addTo(mymap);
L.marker([41.8127606,  -72.2492683], {icon: thirtyoneIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-31.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Castor-aralia</h2> <h5 class='closertitle' >#5110 | Kalopanax	septemlobus </h5> <p> <em>Look for: </em> Palmately 5- to 7-lobed, 7-10 inch wide dark green leaves, stout yellowish prickles on young stems </p> <a class='linky' href='trees/33-castor-aralia.html'> <p> More on Castor-aralia <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var thirtytwoIcon = L.icon({
  title: "American Holly",
  iconUrl: 'img/markers/markers-34.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8115063,   -72.2513935], {icon: thirtytwoIcon}).addTo(mymap);
L.marker([41.8115063,   -72.2513935], {icon: thirtytwoIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-32.png'> </div> <div class='flex1'> <h2 id='overidesmall'>American Holly</h2> <h5 class='closertitle' >#6638 | Ilex	opaca </h5> <p> <em>Look for: </em> Dark green elipitic 1.5-3.5 inch leaves with large remote spiny teeth, evergreen </p> <a class='linky' href='trees/34-american-holly.html'> <p> More on American Holly <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var thirtythreeIcon = L.icon({
  title: "Trident Maple",
  iconUrl: 'img/markers/markers-31.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8123728,  -72.2486407], {icon: thirtythreeIcon}).addTo(mymap);
L.marker([41.8123728,  -72.2486407], {icon: thirtythreeIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-33.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Trident Maple</h2> <h5 class='closertitle' >#5011 | Acer	buergerianum </h5> <p> <em>Look for: </em> 3-lobed 1.5- 3.5 inch high/wide, lustrous dark green leaves, New growth often rich bronze transitions through purple to green in summer </p> <a class='linky' href='trees/31-trident-maple.html'> <p> More on Trident Maple <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var thirtyfourIcon = L.icon({
  title: "Common Baldcypress",
  iconUrl: 'img/markers/markers-35.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8113788,  -72.2526872], {icon: thirtyfourIcon}).addTo(mymap);
L.marker([41.8113788,  -72.2526872], {icon: thirtyfourIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-34.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Common Baldcypress</h2> <h5 class='closertitle' >#5427 | Taxodium	distichum </h5> <p> <em>Look for: </em> Leaves spirally arranged around branchlets--bright yellow green in spring turning to sage green, reddish brown, fibrous bark</p> <a class='linky' href='trees/35-common-baldcypress.html'> <p> More on Common Baldcypress <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
var thirtyfiveIcon = L.icon({
  title: "Sweetbay Magnolia",
  iconUrl: 'img/markers/markers-36.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8111565,  -72.2547953], {icon: thirtyfiveIcon}).addTo(mymap);
L.marker([41.8111565,  -72.2547953], {icon: thirtyfiveIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-35.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Sweetbay Magnolia</h2> <h5 class='closertitle' >#5739 | Magnolia	virginiana </h5> <p> <em>Look for: </em> Glistening dark green leaves with a silver underside, creamy white flowers during May/June</p> <a class='linky' href='trees/36-sweetbay-magnolia.html'> <p> More on Sweetbay Magnolia <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var thirtysixIcon = L.icon({
  title: "Fragrant Snowbell",
  iconUrl: 'img/markers/markers-39.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8103198,  -72.2559804], {icon: thirtysixIcon}).addTo(mymap);
L.marker([41.8103198,  -72.2559804], {icon: thirtysixIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-36.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Fragrant Snowbell</h2> <h5 class='closertitle' >#5926 | Styrax	obassia </h5> <p> <em>Look for: </em> Fragrant, bell-shaped, white flowers are borne on 4-inch to 8-inch long chains, 8-inch long disk-shaped deep green leaves </p> <a class='linky' href='trees/39-fragrant-snowbell.html'> <p> More on Fragrant Snowbell <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var thirtysevenIcon = L.icon({
  title: "Japanese Raisin Tree",
  iconUrl: 'img/markers/markers-38.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8101199,  -72.2560622], {icon: thirtysevenIcon}).addTo(mymap);
L.marker([41.8101199,  -72.2560622], {icon: thirtysevenIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-37.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Japanese Raisin Tree</h2> <h5 class='closertitle' >#5933 | Hovenia	dulcis </h5> <p> <em>Look for: </em> Flat-gray bark with shallow, dark furrows and wide ridges, broad-ovate 4-6 inch green leafs </p> <a class='linky' href='trees/38-japanese-raisin-tree.html'> <p> More on Japanese Raisin Tree <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var thirtyeightIcon = L.icon({
  title: "Giant Sequoia",
  iconUrl: 'img/markers/markers-29.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8116793,   -72.248165], {icon: thirtyeightIcon}).addTo(mymap);
L.marker([41.8116793,   -72.248165], {icon: thirtyeightIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-38.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Giant Sequoia</h2> <h5 class='closertitle' >#5050 | Sequoiadendron	giganteum </h5> <p> <em>Look for: </em> Awl-shaped bluish-green needles 1/8-1/2 inches in length </p> <a class='linky' href='trees/29-giant-sequoia.html'> <p> More on Giant Sequoia <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);

var thirtynineIcon = L.icon({
  title: "Sourwood",
  iconUrl: 'img/markers/markers-37.png',

  iconSize:     [30, 50], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [6, -40] // point from which the popup should open relative to the iconAnchor
});    
L.marker([41.8107089,   -72.2571844], {icon: thirtynineIcon}).addTo(mymap);
L.marker([41.8107089,   -72.2571844], {icon: thirtynineIcon}).addTo(mymap).bindPopup("<div class='flex'> <div class='flex2'> <img width= '150px' src='img/cutouts/cutouts-39.png'> </div> <div class='flex1'> <h2 id='overidesmall'>Sourwood</h2> <h5 class='closertitle' >#5809 | Oxydendrum	arboreum </h5> <p> <em>Look for: </em> Lance-shaped leaves ranging from 3 to 8 inches long, small creamy-white flower clusters </p> <a class='linky' href='trees/37-sourwood.html'> <p> More on Sourwood <i class='fas fa-chevron-right'></i></p> </a> </div> </div> "

);
mymap.locate({setView: true, maxZoom: 16});
 function onLocationFound(e) {
  var radius = e.accuracy;
  L.marker(e.latlng).addTo(mymap)
      .bindPopup("You are within " + radius + " meters from this point")

  L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);
function onLocationError(e) {
  alert(e.message);
}

mymap.on('locationerror', onLocationError);