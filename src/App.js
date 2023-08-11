import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pics from './components/Pics';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Header onSearch={(query) => setSearchQuery(query)} />
      <Pics searchQuery={searchQuery} />
    </div>
  );
};

export default App;