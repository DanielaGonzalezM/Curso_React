//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import'./index.css';
import React from 'react';
const ReactDOM = require('react-dom')

const divRoot = document.querySelector('#root');

 //ReactDOM.render(<PrimeraApp pregunta="como estas?" />,divRoot);
ReactDOM.render(<CounterApp value={0} />,divRoot);
