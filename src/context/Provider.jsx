import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [number, setNumber] = useState('');
  const [clientes, setClientes] = useState([]);
 

  const value = {
    clientes, 
    setClientes,
    number,
    setNumber
  
  };

  return(
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
