//ES6 匯入
import sayHi from './person';
import './main.scss';

const myDiv = document.querySelector('#div1');
if(myDiv !== null){
    myDiv.innerHTML = sayHi("Jack",25);
}

