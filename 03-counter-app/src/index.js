import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp value={5} />, divRoot);
// ReactDOM.render(<PrimeraApp saludo='Hola, Soy Goku!' />, divRoot);