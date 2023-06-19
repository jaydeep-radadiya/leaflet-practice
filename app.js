const map = L.map('map').setView([22.907487, 79.073067], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Jaydeep'

// configure tiles
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

const Clayer = L.circle([22.907487, 79.073067], { radius: 20000, color: 'coral' });
Clayer.addTo(map);

const bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]]
const rectangle = L.rectangle(bounds);
rectangle.addTo(map);

const btriangle_coordinates = [[25.774, -80.19], [18.466, -66.118], [32.321, -64.757]]
const polygon = L.polygon(btriangle_coordinates);
polygon.addTo(map);

const latlngs = [[45.51, -122.68], [37.77, -122.43], [34.04, -118.2]];
const polyline = L.polyline(latlngs);
polyline.addTo(map);

// circle layer takes radius in meters
// circle marker takes radius in pixels, fixed size circle, radius remains same
// const cMarker = L.circleMarker([18.920675417289807, 72.82952788802535], { radius:40, color: 'coral' });
// cMarker.addTo(map);

const icon = L.icon({
    iconUrl: 'pizza.png',
    iconSize: [40, 30]
})
const marker = L.marker([18.920675417289807, 72.82952788802535], { icon });
// marker.bindPopup('Normal Message');
marker.bindPopup('<h2>Pizza Shop 1<h2>');
marker.addTo(map);