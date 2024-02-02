import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import './SearchBar.css';
import { fetchClients } from '../../api/fetchClients';




function SearchBar() {
  const [number, setNumber] = useState('');
  const [clientes, setClientes] = useState();
  
  useEffect(() => {

    fetchClients('27707169000132').then((response) => {

      setClientes(response);
      

    });
  }, []);
 
  
  console.log(number);
  console.log(clientes);
 

  return (
    
    <div className="card-search">
      <form className="search-bar">
        <input
          type="text"
          value={number}
          className="search__input"
          placeholder="Buscar produtos"
          onChange={ ({ target }) => setNumber(target.value) }
          required
        />

        <button type="submit" className="search__button">
          <IoSearchSharp />
        </button>
      </form>
    </div>
    
  );
}

export default SearchBar;

