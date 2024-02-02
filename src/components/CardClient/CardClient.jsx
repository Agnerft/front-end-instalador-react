import React, { useContext } from 'react';
import './CardClient.css';
import AppContext from '../../context/AppContext';
import PropTypes from 'prop-types';
import { ImCopy } from 'react-icons/im';

function CardClient() {
  const { clientes } = useContext(AppContext);

  return (
    <section className='section-card-cliente'>
      <div className='card-cliente'>
        {clientes.map((cliente) => (
          <div key={cliente.id}>
            <div>
              <h2>CLIENTE</h2>
              <p>{cliente.cliente}</p>
              <button className='button__copy'>
                <ImCopy />
              </button>
            </div>
            {/*               
              <p>{cliente.link}</p>
              <p>{cliente.link_sip}</p>
              <p>{cliente.quantidade_ramal}</p> */}
              
          </div>
        ))} 
      </div>
    </section>
  );
}

CardClient.propTypes = {
  children: PropTypes.any,
};

export default CardClient;
