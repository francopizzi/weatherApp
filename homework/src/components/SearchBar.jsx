import React , { useState }from 'react';
import styles from '../Styles/search.module.css';

export default function SearchBar({onSearch}) {
  
  const [city , setCity] = useState();
  function inputChange (event)
  {
    setCity(event.target.value);
  }
  
  // acá va tu código
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }} className={styles.bkColor}>
        <input 
          onChange={inputChange} 
          className={styles.text} 
          type="search" 
          placeholder="Ciudad...">
          </input>
        <button 
        className={`${styles.btn} ${styles.letra}`}>
        Agregar</button>
  </form>
  )
};