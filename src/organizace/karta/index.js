import './style.css';
import img_nautis from '../../img/nautis.png';
import img_ric from '../../img/ric.png';

export const karta = (props) => {
  return `
  <div class="karta">
  <img class="karta__obrazek" src=${img_ric} alt="ric" />
  <div class="karta__name">Rodinné Integrační Centrum z. s.</div>
  <div>náměstí Republiky 2686, 530 02 Pardubice</div>
  <div>vchod z ulice Jindřišská</div>
  <div>Email: info@ric.cz</div>
  <div>
    Telefon:
    <a href="https://www.ric.cz/obsah/kontakty"
      >https://www.ric.cz/obsah/kontakty</a
    >
  </div>
</div>
<div class="karta">
  <img class="karta__obrazek" src= ${img_nautis} alt="nautis" />
  <div class="karta__name">Národní ústav pro autismus, z.ú.</div>
  <div>V Holešovičkách 593/1a, 182 00 Praha 8</div>
  <div>E-mail: poradna@nautis.cz</div>
  <div>Telefon: +420 778 402 641</div>
</div>`;
};
