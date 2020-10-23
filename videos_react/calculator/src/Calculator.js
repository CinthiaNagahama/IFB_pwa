import React, { useState } from 'react';
import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Square from './Square';
import { InputText } from 'primereact/inputtext'

function Calculator(){
  const [value, setValue] = useState("");

  function add(expression){
    setValue(value + expression);
  };

  function calculate(){
    setValue(eval(value));
  };

  return(
    <div className="calculator">
      <div>
        <InputText value={value}/>
      </div>
      <div className="row">
        <Square value="7" onClick={() => {add('7')}}/>
        <Square value="8" onClick={() => {add('8')}}/>
        <Square value="9" onClick={() => {add('9')}}/>
        <Square value="/" onClick={() => {add('/')}}/>
      </div>
      <div className="row">
        <Square value="4" onClick={() => {add('4')}}/>
        <Square value="5" onClick={() => {add('5')}}/>
        <Square value="6" onClick={() => {add('6')}}/>
        <Square value="*" onClick={() => {add('*')}}/>
      </div>
      <div className="row">
        <Square value="1" onClick={() => {add('1')}}/>
        <Square value="2" onClick={() => {add('2')}}/>
        <Square value="3" onClick={() => {add('3')}}/>
        <Square value="-" onClick={() => {add('-')}}/>
      </div>
      <div className="row">
        <Square value="." onClick={() => {add('.')}}/>
        <Square value="0" onClick={() => {add('0')}}/>
        <Square value="=" onClick={() => {calculate()}}/>
        <Square value="+" onClick={() => {add('+')}}/>
      </div>
      <div className="clear-button">
        <Square value="Limpar" onClick={() => {setValue("")}}/>
      </div>
    </div>
  );
}

export default Calculator;