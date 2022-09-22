
import './App.css';
import HeaderBar from './components/header';
import Products from './components/products';
import { useState } from 'react';

function App() {
  /*const handleClick = ()=>{
    const[product, setProduct]= useState('');

    const btnGo= new Promise((resolve, reject) => {
      .then();
      .catch();
    })
<button onClick={handleClick}>GO</button>
  }*/
  return (
    <div className="App">
      <HeaderBar/>
      <Products/>
    
    </div>
  );
}

export default App;
