// Read tracking number from URL (track.html?tn=XXXX)
const params = new URLSearchParams(window.location.search);
const tn = params.get("tn") || "—";

// Sri Lanka center
const SL_CENTER = [7.8731, 80.7718];
const SL_ZOOM = 7;

let map, userMarker, courierMarker, routeLine;
let interval = null;

// Demo path (Courier movement)
const demoPath = [
  [6.9271, 79.8612], // Colombo
  [7.2906, 80.6337], // Kandy
  [6.9497, 80.7891], // Nuwara Eliya-ish
  [7.0, 80.2],       // mid
  [6.9271, 79.8612], // back Colombo
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("displayTrackingNo").textContent = tn;
  initMap();
  locateUser();

  // auto start tracking if tracking number exists
  if (tn !== "—") startTracking();
});

function initMap(){
  map = L.map("map").setView(SL_CENTER, SL_ZOOM);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // courier marker start
  courierMarker = L.marker(demoPath[0]).addTo(map).bindPopup("Courier: Waiting...");

  // route line
  routeLine = L.polyline([], { weight: 4, opacity: 0.85 }).addTo(map);
}

function centerSriLanka(){
  map.setView(SL_CENTER, SL_ZOOM);
}

function centerOnUser(){
  if(userMarker){
    map.setView(userMarker.getLatLng(), 14);
    userMarker.openPopup();
  }else{
    alert("User location not available. Allow location permission.");
  }
}

function locateUser(){
  if(!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos)=>{
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      userMarker = L.marker([lat,lng]).addTo(map).bindPopup("You are here");
    },
    ()=>{},
    { enableHighAccuracy:true, timeout:8000 }
  );
}

function startTracking(){
  document.getElementById("statusText").textContent = "Tracking started...";
  document.getElementById("etaText").textContent = "Approx. 20–40 min";

  routeLine.setLatLngs(demoPath);
  map.fitBounds(routeLine.getBounds(), { padding:[40,40] });

  let i = 0;
  updateCourier(demoPath[i], "Courier picked up parcel");

  if(interval) clearInterval(interval);

  interval = setInterval(()=>{
    i++;
    if(i >= demoPath.length) i = 0;

    const msg = (i === 1) ? "Courier heading to Kandy"
              : (i === 2) ? "Courier near hill country"
              : (i === 3) ? "Courier updating location"
              : "Courier near Colombo";

    updateCourier(demoPath[i], msg);
  }, 3000);
}

function updateCourier(latlng, msg){
  courierMarker.setLatLng(latlng);
  courierMarker.setPopupContent(msg);

  document.getElementById("statusText").textContent = msg;
  document.getElementById("coordText").textContent =
    latlng[0].toFixed(5) + ", " + latlng[1].toFixed(5);
}
