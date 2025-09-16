// script.js
const mapa = L.map('mapa').setView([-25.4429, -49.1926], 13); // Pinhais como ponto inicial

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Exemplo de marcador
L.marker([-25.4429, -49.1926])
  .addTo(mapa)
  .bindPopup('Você está aqui!')
  .openPopup();
