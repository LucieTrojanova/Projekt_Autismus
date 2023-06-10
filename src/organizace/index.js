import { karta } from './karta/index.js';
import './style.css';

export const organizace = (props) => {
  document.querySelector('#app').append(karta({}), karta({}));
};
