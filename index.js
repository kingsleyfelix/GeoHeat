// Initialize the map
const map = L.map('map').setView([6.5244, 3.3792], 11); // Lagos

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample store icons
const storeIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
  iconSize: [30, 30]
});

const locations = [
  { lat: 6.5484, lng: 3.3035 },
  { lat: 6.5244, lng: 3.3792 },
  { lat: 6.4654, lng: 3.4064 }
];

locations.forEach(loc => {
  L.marker([loc.lat, loc.lng], { icon: storeIcon }).addTo(map);
});