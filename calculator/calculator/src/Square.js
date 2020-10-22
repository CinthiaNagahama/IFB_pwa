import React from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';

function Square(props){
  return (
    <Button label={props.value} onClick={props.onClick}/>
  );
}

export default Square;