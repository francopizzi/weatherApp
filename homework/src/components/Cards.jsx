import React from 'react';
import Card from './Card';
import styles from '../Styles/cards.module.css';
import '../App';
import { Route } from 'react-router';

export default function Cards({cities , onClose}) {
  if (!cities)
  {
    return <h1>No hay ciudades disponibles</h1>;
  }
  return (
  <div className={styles.posicion}>
    {cities.map(c => <Route
        exact path='/'
        render = {() => 
          
          <Card
              key={c.id}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id = {c.id}
            /> } 
            />)}
  </div>
  )
};