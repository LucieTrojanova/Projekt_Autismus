import './style.css';
export const HomePage = () => {
  const element = document.createElement('div');
  element.innerHTML = `
  <div>
      <header>
        <nav class="menu">
          <ul class="obsah">
            <li><a href="#" class="tlacitko">Příběh</a></li>
            <li>
              <a href="/organizace" class="tlacitko">Organizace</a>
            </li>
            <li><a href="#" class="tlacitko">Strava</a></li>
            <li><a href="#" class="tlacitko">Knihy</a></li>
            <li><a href="#" class="tlacitko">Terapie</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Autismus a jak dál...</h1>

        <div></div>
      </main>
      <footer></footer>
    </div>
  `;
  return element;
};
