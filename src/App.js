import React, { useState } from 'react';
import SearchBar from './components/search-bar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  let SalutationMessage = useState("Nihao")[0];


  return (
    <div className="App">

  <SearchBar SalutationMessage>{SalutationMessage}</SearchBar>
    
    </div>
  );
}

export default App;
