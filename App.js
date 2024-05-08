import React from 'react';
import './App.css';
import { FormDace } from './FormDace/FormDace';
import { InicioDace } from './InicioDace/InicioDace';
import { InicioSesion } from './InicioSesion/InicioSesion';
// import { Context } from './Context/Context';

function App() {
  return (
    <>
      <div className="App"> 
        {/* <Context> */}
          <InicioDace />
          <FormDace />
          <InicioSesion />
        {/* </Context> */}

      </div>

    </>
  );
}

export default App;
