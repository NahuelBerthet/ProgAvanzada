import { getLaunches } from '../api/api.js';

export default async function Home(container) {
  const launches = await getLaunches();

  const grid = document.createElement('div');
  grid.className = 'grid';

  launches.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${l.links.patch.small}" alt="${l.name}" />
      <h3>${l.name}</h3>
    `;
    card.addEventListener('click', () => {
      window.location.hash = `/detail/${l.flight_number}`;
    });
    grid.appendChild(card);
  });

  container.appendChild(grid);
}
