import React , { useState }from 'react';
import styles from '../Styles/search.module.css';
import {FiSearch} from 'react-icons/fi';

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
      setCity('');
    }} className={styles.bkColor}>
        <input 
          onChange={inputChange} 
          className={styles.text} 
          type="search" 
          placeholder="Ciudad..."
          value={city}>
          </input>
          <button className={styles.btn}><FiSearch/></button>
        {/*
        <button 
        className={`${styles.btn} ${styles.letra}`}>
        Agregar</button> */}
  </form>
  )
};