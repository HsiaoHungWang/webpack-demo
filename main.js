//ES6 匯入
import { person } from './person.js';
import './main.css';

const myDiv = document.querySelector('#div1');
myDiv.innerHTML = `<h2>${person.firstName} ${person.lastName}</h2>`;
