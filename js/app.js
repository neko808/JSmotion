function fill_template() {
  let data = {
    title: "Why Handlebars are so cool!",
    list: [
      { name: "You can generate stuff" },
      { name: "It works on both ends" },
      { name: "It weighs like 24 kb" },
      { name: "haha templates go brrrrrr <b> bold </b>" },
    ],
    footer: "This is a footer",
  };
  let template = Handlebars.compile(
    document.querySelector("#template").innerHTML
  );
  let filled = template(data);
  document.querySelector("#output").innerHTML = filled;
}

/*  Google Maps Platform  */
window.addEventListener("load", function () {
  console.log("The page ha terminado de cargarse!!");
});

// function iniciarMapa(){
//     const coord = {lat:40.418972208717015 ,lng: -3.6891307288353525};
//     const map = new google.maps.Map(document.getElementById('map'),{
//       zoom: 17,
//       center: coord
//     });
//     const marker = new google.maps.Marker({
//       position: coord,
//       map: map
//     });
// }

function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "8dd05569960ba847",
    center: { lat: 40.418972208717015, lng: -3.6891307288353525 },
    zoom: 17,
  });
}

window.initMap = initMap;
