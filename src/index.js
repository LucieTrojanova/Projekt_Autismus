import './style.css';
import { HomePage } from './homepage/index.js';
import { organizace } from './organizace/index.js';

const appElement = document.querySelector('#app');

if (location.pathname === '/') {
  appElement.append(HomePage());
} else if (location.pathname === '/organizace') {
  appElement.append(organizace());
}
