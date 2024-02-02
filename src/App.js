import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Provider from './context/Provider';
import CardClient from './components/CardClient/CardClient';


function App() {
  return (
    <Provider>
      <Header />
      <SearchBar />
      <CardClient />
    </Provider>
    
  );
}

export default App;
