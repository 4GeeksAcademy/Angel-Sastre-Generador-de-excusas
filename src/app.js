import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {

  document.querySelector('#excuse').innerHTML = generateExcuse();
  console.log('Hello Rigo from the console!');
};

let generateExcuse = () => {

  let who = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi pajaro'];
  let action = ['se comió', 'se hizo pis', 'aplastó', 'rompió'];
  let what = ['mis deberes', 'mi movil', 'el coche'];
  let when = ['antes de clase', 'cuando yo estaba durmiendo', 'cuando yo hacia ejercicio', 'cuando yo comia', 'cuando estaba rezando'];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex] ;
};


