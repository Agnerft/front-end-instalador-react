import React, { useContext } from 'react';
import './CardClient.css';
import AppContext from '../../context/AppContext';
import PropTypes from 'prop-types';

import ButtonCopy from '../ButtonCopy/ButtonCopy';

function CardClient() {
  const { clientes } = useContext(AppContext);

  return (
    <section className='section-card-cliente'>
      
      {clientes.map((cliente) => (
        <div className='card-cliente' key={cliente.id}>
          <h1 className='text-cliente'>CLIENTE</h1>
          <div className='card-cliente-teste'>
            <p>{cliente.cliente}</p>
            <ButtonCopy />
          </div>
          <div className='card-cliente-teste'>
            <p>{cliente.link}</p>
            <ButtonCopy />
          </div>
          <div className='card-cliente-teste'>
            <p>{cliente.link_sip}</p>
            <ButtonCopy />
          </div>
          <div className='card-cliente-teste'>
            <p>{cliente.quantidade_ramal}</p>
            <ButtonCopy />
          </div>
          
          
           
                        
          
          {/* <p>{cliente.link_sip}</p>
          <p>{cliente.quantidade_ramal}</p> */}
              
        </div>
      ))} 
      
    </section>
  );
}

CardClient.propTypes = {
  children: PropTypes.any,
};

export default CardClient;
