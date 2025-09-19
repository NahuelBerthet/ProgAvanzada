import { getLaunches } from '../api/api.js';

export default async function Detail(id, container) {
  const launches = await getLaunches();
  const launch = launches.find(l => l.flight_number == id);

  if (!launch) {
    container.innerHTML = `<p>No se encontró el lanzamiento</p>`;
    return;
  }

  container.innerHTML = `
    <div class="detail">
      <img src="${launch.links.patch.large}" alt="${launch.name}" />
      <h2>${launch.name}</h2>
      <p><strong>Vuelo:</strong> ${launch.flight_number}</p>
      <p><strong>Fecha:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
      <p><strong>Detalle:</strong> ${launch.details || 'Sin información'}</p>
      <p><strong>Fallas:</strong> ${
        launch.failures.length > 0 
        ? launch.failures.map(f => f.reason).join(', ') 
        : 'Ninguna'
      }</p>
      <button id="back-btn">Volver</button>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    window.location.hash = '/';
  });
}
