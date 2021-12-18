import React , { useState }from 'react';
import styles from '../Styles/search.module.css';
import {FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function SearchBar({onSearch}) {
  
  const [city , setCity] = useState('');
  function inputChange (event)
  {
    setCity(event.target.value);
  }
  function handlerSubmit (e) {
    e.preventDefault();
    if (city !== '')
    {
      onSearch(city);
      setCity('');
    }
}
  
  // acá va tu código
  return (
    <form onClick={(e)=> handlerSubmit(e)} className={styles.bkColor}>
        <input 
          onChange={inputChange} 
          className={styles.text} 
          type="search" 
          placeholder="Ciudad..."
          value={city}>
          </input>

        <Link to="/">
          <button className={styles.btn}><FiSearch/></button>
        </Link>
        
        {/*
        <button 
        className={`${styles.btn} ${styles.letra}`}>
        Agregar</button> */}
    </form>
  )
};