// Inicializa o mapa no elemento com id "mapa"
const mapa = L.map('mapa').setView([-25.4429, -49.1926], 13); // Pinhais, PR

// Adiciona a camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Adiciona um marcador com popup
L.marker([-25.4429, -49.1926])
  .addTo(mapa)
  .bindPopup('Você está aqui!')
  .openPopup();
