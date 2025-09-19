import Home from './views/Home.js';
import Detail from './views/Detail.js';

export function router() {
  const app = document.getElementById('app');
  const hash = window.location.hash.slice(1) || '/';

  if (hash.startsWith('/detail/')) {
    const id = hash.split('/')[2];
    app.innerHTML = '';
    Detail(id, app);
  } else {
    app.innerHTML = '';
    Home(app);
  }
}

window.addEventListener('hashchange', router);
