import React from 'react';
import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Square from './Square';
import { InputText } from 'primereact/inputtext'

function Calculator(){
  return(
    <div className="calculator">
      <div>
        <InputText/>
      </div>
      <div className="row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
        <Square value="/"/>
      </div>
      <div className="row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
        <Square value="*"/>
      </div>
      <div className="row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
        <Square value="-"/>
      </div>
      <div className="row">
        <Square value="."/>
        <Square value="0"/>
        <Square value="="/>
        <Square value="+"/>
      </div>
      <div className="row">
        <Square value="Limpar"/>
      </div>
    </div>
  );
}

export default Calculator;