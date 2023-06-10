import { karta } from 'karta/index.js';

export const organizace = (props) => {
  document.querySelector('#app').append(karta({}), karta({}));
};
