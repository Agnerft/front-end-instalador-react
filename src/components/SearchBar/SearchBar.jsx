import React, { useContext } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import './SearchBar.css';
import { fetchClients } from '../../api/fetchClients';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const { clientes, number, setNumber, setClientes } = useContext(AppContext);

  const handleInputChange = async ({ target }) => {
    const inputValue = target.value;
    setNumber(inputValue);

    try {
      // Pesquisar e atualizar o estado 'clientes' ao digitar
      const response = await fetchClients(inputValue);
      setClientes(response);
      
      console.log('Está aqui o response', response);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  console.log(clientes);

  return (
    <div className="card-search">
      <form className="search-bar" >
        <input
          type="text"
          value={number}
          className="search__input"
          placeholder="Buscar produtos"
          onChange={handleInputChange}
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
