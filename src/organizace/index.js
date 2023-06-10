import { karta } from './karta/index.js';
import './style.css';

export const organizace = (props) => {
  const element = document.createElement('div');
  element.innerHTML = karta();
  return element;
};
